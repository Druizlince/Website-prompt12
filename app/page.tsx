import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import AITierSection from "@/components/AITierSection";
import HowItWorks from "@/components/HowItWorks";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WelcomeVoice from "@/components/WelcomeVoice";

export default function Home() {
  return (
    <main>
      <WelcomeVoice />
      <Navbar />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <AITierSection />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
