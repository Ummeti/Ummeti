import About from '@/components/home/About';
import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import Statistics from '@/components/home/Statistics';
import Testimonials from '@/components/home/Testimonials';
import Boxes from '@/components/widgets/Boxes';
import Volunteer from '@/components/home/Volunteer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <About />
      <Projects />
      <Volunteer />
      <Testimonials />
      <Boxes />
    </main>
  );
}
