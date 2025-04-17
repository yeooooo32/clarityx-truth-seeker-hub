
import { ParticleBackground } from "@/components/Particles";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustSignals } from "@/components/TrustSignals";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-clarityx-dark bg-mesh-gradient">
      <ParticleBackground />
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
