import prisma from '@/lib/client';
import Projects from '../ui/Projects';
import { unstable_noStore as noStore } from 'next/cache';

export default async function ProjectsSection() {
  noStore();

  const projects = await prisma.project.findMany();
  return (
    <section>
      <Projects projects={projects} />
    </section>
  );
}
