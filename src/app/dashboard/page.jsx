import Items from './Items';
import Tabs from './ui/Tabs';
import prisma from '@/lib/client';
import { CategoryIcon, PostIcon, ProjectIcon } from './ui/Icons';
import { removeProjectAction } from '@/app/actions/projectActions';
import { removePostAction } from '@/app/actions/postActions';

export default async function Dashboard() {
  const projects = await prisma.project.findMany({
    include: {
      user: true,
    },
  });

  const posts = await prisma.post.findMany({
    include: {
      user: true,
    },
  });

  const categories = await prisma.category.findMany({
    include: {
      user: true,
    },
  });

  const projectHeaders = ['Projects', 'Project', 'Raised', 'Goal'];
  const postHeaders = ['Posts', 'Post'];
  const categoryHeaders = ['Categories', 'Category'];
  const tabs = [
    {
      key: 'projects',
      label: 'Projects',
      icon: <ProjectIcon />,
      content: (
        <Items
          items={projects}
          headers={projectHeaders}
          removeAction={removeProjectAction}
        />
      ),
    },
    {
      key: 'posts',
      label: 'Posts',
      icon: <PostIcon />,
      content: (
        <Items
          items={posts}
          headers={postHeaders}
          removeAction={removePostAction}
        />
      ),
    },
    {
      key: 'categories',
      label: 'Categories',
      icon: <CategoryIcon />,
      content: <Items items={categories} headers={categoryHeaders} />,
    },
  ];
  return <Tabs tabs={tabs} />;
}
