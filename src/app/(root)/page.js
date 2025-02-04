import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import Statistics from '@/components/home/Statistics';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Statistics />
      <Projects />
      <Testimonials />
    </main>
  );
}
