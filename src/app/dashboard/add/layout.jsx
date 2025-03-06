import Tabs from '../ui/Tabs';
import { ProjectIcon, PostIcon } from '../ui/Icons';

export default async function AddLayout({ projects, posts }) {
  const tabs = [
    {
      key: 'project',
      label: 'Project',
      icon: <ProjectIcon />,
      content: projects,
    },
    { key: 'post', label: 'Post', icon: <PostIcon />, content: posts },
  ];

  return <Tabs tabs={tabs} />;
}
