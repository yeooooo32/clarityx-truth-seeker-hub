
import { ParticleBackground } from "@/components/Particles";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-clarityx-dark bg-mesh-gradient">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
