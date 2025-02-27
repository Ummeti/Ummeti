'use server';

import prisma from '@/lib/client';
import s3Client from '@/lib/s3Client';
import { ProjectSchema, ProjectIdSchema } from '@/lib/schemas';
import { slugify } from '@/lib/utils';
import { PutObjectCommand, DeleteObjectsCommand } from '@aws-sdk/client-s3';
import { revalidatePath } from 'next/cache';

export async function addProjectAction(prevState, formData) {
  const formObject = {
    title: String(formData.get('title') || ''),
    description: String(formData.get('description') || ''),
    category: String(formData.get('category') || ''),
    raised: Number.parseFloat(formData.get('raised')) || 0,
    goal: Number.parseFloat(formData.get('goal')) || 0,
    images: formData.getAll('images').filter((file) => file && file.size > 0),
  };

  const parsed = ProjectSchema.safeParse(formObject);

  if (!parsed.success) {
    return {
      success: false,
      message: '',
      errors: parsed.error.flatten().fieldErrors,
      formObject,
    };
  }

  try {
    const { category, ...projectData } = parsed.data;
    await createProject(category, projectData);

    revalidatePath('/dashboard');
    return {
      success: true,
      message: 'Project created successfully',
    };
  } catch (error) {
    console.error('Error adding project:', error);
    return {
      success: false,
      message: 'Failed to create project due to a server error.',
      formObject,
    };
  }
}

async function createProject(category, projectData) {
  const imageKeys = await uploadImages(projectData.images);
  const slug = await generateUniqueSlug(projectData.title);

  let categoryRecord = await prisma.category.findFirst({
    where: { title: category },
  });

  if (!categoryRecord) {
    categoryRecord = await prisma.category.create({
      data: {
        title: category,
        userId: '67b8a35679de91ba0f6dfbfb',
      },
    });
  }

  return prisma.project.create({
    data: {
      ...projectData,
      slug,
      categoryId: categoryRecord.id,
      userId: '67b8a35679de91ba0f6dfbfb',
      images: imageKeys,
    },
  });
}

async function uploadImages(images) {
  return Promise.all(
    images.map(async (file) => {
      const fileName = `${Date.now()}-${file.name}`;
      const key = `projects/${fileName}`;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const command = new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: key,
        Body: buffer,
        ContentType: file.type,
      });

      await s3Client.send(command);
      return key;
    })
  );
}

async function generateUniqueSlug(title) {
  const baseSlug = slugify(title);
  let finalSlug = baseSlug;
  let count = 0;

  while (await prisma.project.findUnique({ where: { slug: finalSlug } })) {
    count++;
    finalSlug = `${baseSlug}-${count}`;
  }

  return finalSlug;
}

export async function removeProjectAction(id) {
  const parsed = ProjectIdSchema.safeParse(id);
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  try {
    const project = await prisma.project.findUnique({
      where: { id },
      select: { images: true },
    });

    if (!project) throw new Error('Project not found');

    if (project.images?.length) {
      await s3Client.send(
        new DeleteObjectsCommand({
          Bucket: process.env.AWS_S3_BUCKET,
          Delete: {
            Objects: project.images.map((key) => ({ Key: key })),
            Quiet: true,
          },
        })
      );
    }

    await prisma.project.delete({ where: { id } });
    revalidatePath('/dashboard');
    return { success: true, message: 'Project deleted successfully' };
  } catch (error) {
    console.error('Error removing project:', error);
    return {
      success: false,
      message: error.message || 'Failed to delete project.',
    };
  }
}
