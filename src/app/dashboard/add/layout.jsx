import Tabs from '../ui/Tabs';
import { ProjectIcon, PostIcon } from '../ui/Icons';

export default async function AddLayout({ projects, posts }) {
  const tabs = [
    {
      key: 'projects',
      label: 'Projects',
      icon: <ProjectIcon />,
      content: projects,
    },
    { key: 'posts', label: 'Posts', icon: <PostIcon />, content: posts },
  ];

  return <Tabs tabs={tabs} />;
}
