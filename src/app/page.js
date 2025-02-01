import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import Projects from '@/components/home/Projects';
import Statistics from '@/components/home/Statistics';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Statistics />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}
