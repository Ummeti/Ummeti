import Items from './Items';
import Tabs from './ui/Tabs';
import { CategoryIcon, PostIcon, ProjectIcon } from './ui/Icons';
import { removeProjectAction } from '@/app/actions/projectActions';
import { removePostAction } from '@/app/actions/postActions';
import { removeCategoryAction } from '../actions/categoryActions';
import { fetchDashboardData } from '@/lib/fetchData';

export default async function Dashboard() {
  const { projects, posts, categories } = await fetchDashboardData();

  const tabConfig = {
    projects: {
      headers: ['Projects', 'Project', 'Raised', 'Goal'],
      removeAction: removeProjectAction,
    },
    posts: {
      headers: ['Posts', 'Post'],
      removeAction: removePostAction,
    },
    categories: {
      headers: ['Categories', 'Category'],
      removeAction: removeCategoryAction,
    },
  };

  const tabs = [
    {
      key: 'projects',
      label: 'Projects',
      icon: <ProjectIcon />,
      content: <Items items={projects} {...tabConfig.projects} />,
    },
    {
      key: 'posts',
      label: 'Posts',
      icon: <PostIcon />,
      content: <Items items={posts} {...tabConfig.posts} />,
    },
    {
      key: 'categories',
      label: 'Categories',
      icon: <CategoryIcon />,
      content: <Items items={categories} {...tabConfig.categories} />,
    },
  ];

  return <Tabs tabs={tabs} />;
}
