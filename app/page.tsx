import Hero from "@/components/Hero";
import CategorySlides from "@/components/CategorySlides";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySlides />
      <StatsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}