import Hero from '@/components/Hero';
import ForceVehicles from '@/components/ForceVehicles';
import HazardMarquee from '@/components/HazardMarquee';
import OtherBrands from '@/components/OtherBrands';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <HazardMarquee />
      <ForceVehicles />
      <OtherBrands />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
