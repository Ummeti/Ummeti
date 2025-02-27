import ProjectSection from './ProjectSection';
import { fetchCategories, fetchProjects } from '@/lib/fetchData';

export default async function Projects() {
  const projects = await fetchProjects();
  const categories = await fetchCategories();

  return <ProjectSection projects={projects} categoriesList={categories} />;
}
