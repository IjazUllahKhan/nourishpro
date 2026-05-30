import Hero from "@/components/Hero";
import CategorySlides from "@/components/CategorySlides";
import StatsSection from "@/components/StatsSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySlides />
      <StatsSection />
      <WhyPartnerSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}