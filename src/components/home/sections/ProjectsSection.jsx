export const dynamic = 'force-dynamic';
import prisma from '@/lib/client';
import Projects from '../ui/Projects';

export default async function ProjectsSection() {
  const projects = await prisma.project.findMany();
  return (
    <section>
      <Projects projects={projects} />
    </section>
  );
}
