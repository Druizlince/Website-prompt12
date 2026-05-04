import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import AITierSection from "@/components/AITierSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WelcomeVoice from "@/components/WelcomeVoice";
import CustomCursor from "@/components/CustomCursor";
import ParticleNetwork from "@/components/ParticleNetwork";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ParticleNetwork />
      <main style={{ position: "relative", zIndex: 2 }}>
        <WelcomeVoice />
        <Navbar />
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <AITierSection />
        <HowItWorks />
        <AboutSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
