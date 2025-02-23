import { CategoryIcon, PostIcon, ProjectIcon } from './ui/Icons';
import Items from './Items';
import Tabs from './ui/Tabs';

export default function Dashboard() {
  const tabs = [
    {
      key: 'projects',
      label: 'Projects',
      icon: <ProjectIcon />,
      content: <Items />,
    },
    { key: 'posts', label: 'Posts', icon: <PostIcon />, content: <Items /> },
    {
      key: 'categories',
      label: 'Categories',
      icon: <CategoryIcon />,
      content: <Items />,
    },
  ];
  return <Tabs tabs={tabs} />;
}
