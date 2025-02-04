import Goals from '@/components/home/Goals';
import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import Statistics from '@/components/home/Statistics';
import Testimonials from '@/components/home/Testimonials';
import Boxes from '@/components/widgets/Boxes';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <Projects />
      <Goals />
      <Contact />
      <Testimonials />
      <Boxes />
    </main>
  );
}
