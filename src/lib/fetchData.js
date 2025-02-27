import prisma from '@/lib/client';
import s3Client from '@/lib/s3Client';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { GetObjectCommand } from '@aws-sdk/client-s3';

export const generateSignedUrls = async (keys) => {
  const urlPromises = keys.map((key) =>
    getSignedUrl(
      s3Client,
      new GetObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: key,
      }),
      { expiresIn: 3600 }
    )
  );
  return Promise.all(urlPromises);
};

export const enhanceWithImages = async (items) =>
  Promise.all(
    items.map(async (item) => ({
      ...item,
      ...(item.images?.length > 0 && {
        images: await generateSignedUrls(item.images),
      }),
    }))
  );

export const fetchProjects = async () => {
  const projects = await prisma.project.findMany({
    include: { user: true, category: true },
    orderBy: { createdAt: 'desc' },
  });
  return enhanceWithImages(projects);
};

export const fetchPosts = async () => {
  const posts = await prisma.post.findMany({
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  });
  return enhanceWithImages(posts);
};

export const fetchCategories = async () => {
  const categories = await prisma.category.findMany({
    include: { user: true },
    orderBy: { createdAt: 'desc' },
  });
  return categories;
};

export const fetchProjectBySlug = async (slug) => {
  const project = await prisma.project.findUnique({
    where: { slug },
    include: { category: true },
  });
  return enhanceWithImages([project]);
};

export const fetchPosttBySlug = async (slug) => {
  const post = await prisma.post.findUnique({
    where: { slug },
  });
  return enhanceWithImages([post]);
};

export const fetchDashboardData = async () => {
  const [projects, posts, categories] = await Promise.all([
    fetchProjects(),
    fetchPosts(),
    fetchCategories(),
  ]);

  return { projects, posts, categories };
};
