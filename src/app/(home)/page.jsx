import AboutSection from '@/components/home/sections/AboutSection';
import HeroSection from '@/components/home/sections/HeroSection';
import ProjectsSection from '@/components/home/sections/ProjectsSection';
import TestimonialsSection from '@/components/home/sections/TestimonialsSection';
import VolunteerSection from '@/components/home/sections/VolunteerSection';
import Statistics from '@/components/home/ui/Statistics';
import Boxes from '@/components/widgets/Boxes';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Statistics />
      <AboutSection />
      <ProjectsSection />
      <VolunteerSection />
      <TestimonialsSection />
      <Boxes />
    </main>
  );
}
