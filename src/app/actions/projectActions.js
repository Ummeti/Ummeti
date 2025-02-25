'use server';

import prisma from '@/lib/client';
import { revalidatePath } from 'next/cache';

export async function addProjectAction(formData) {
  console.log(formData);
  const category = formData.get('newCategory') || formData.get('category');

  if (!category) return;

  const newCategory = await prisma.category.create({
    data: {
      title: category,
      userId: '67b8a35679de91ba0f6dfbfb',
    },
  });

  const { title, description, raised, goal } = {
    title: formData.get('title'),
    description: formData.get('description'),
    raised: parseFloat(formData.get('raised')),
    goal: parseFloat(formData.get('goal')),
  };

  const project = await prisma.project.create({
    data: {
      title,
      description,
      raised,
      goal,
      categoryId: newCategory.id,
      userId: '67b8a35679de91ba0f6dfbfb',
      images: ['img.jpg'],
    },
  });

  revalidatePath('/dashboard/add');
}

export async function removeProjectAction(id) {
  await prisma.project.delete({
    where: { id },
  });
  revalidatePath('/dashboard');
}
