'use server';

import prisma from '@/lib/client';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { revalidatePath } from 'next/cache';

const client = new S3Client({ region: process.env.AWS_REGION });

export async function addPostAction(formData) {
  const { title, description, images } = {
    title: formData.get('title'),
    description: formData.get('description'),
    images: formData.getAll('images'),
  };

  const imageKeys = await Promise.all(
    images.map(async (file) => {
      const fileName = `${Date.now()}-${file.name}`;
      const key = `posts/${fileName}`;
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const command = new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: key,
        Body: buffer,
        ContentType: file.type,
      });

      await client.send(command);
      return key;
    })
  );

  const post = await prisma.post.create({
    data: {
      title,
      description,
      userId: '67b8a35679de91ba0f6dfbfb',
      images: imageKeys,
    },
  });
}

export async function removePostAction(id) {
  await prisma.post.delete({
    where: { id },
  });
  revalidatePath('/dashboard');
}
