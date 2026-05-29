import Hero from "@/components/Hero";
import CategorySlides from "@/components/CategorySlides";
import StatsSection from "@/components/StatsSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import ImageCarousel from "@/components/ImageCarousel";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const homeCarouselSlides = [
  {
    image: "/images/carousels/home/home-restaurant.jpg",
    title: "Restaurants",
    description: "Premium dining experiences and franchise-ready restaurant concepts.",
    href: "/restaurants",
  },
  {
    image: "/images/carousels/home/home-real-estate.jpg",
    title: "Real Estate",
    description: "Strategic site selection, property opportunities, and development support.",
    href: "/real-estate",
  },
  {
    image: "/images/carousels/home/home-foundation.jpg",
    title: "Nourish Foundation",
    description: "Community-focused initiatives built around nourishment, education, and opportunity.",
    href: "/foundation",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySlides />
      <ImageCarousel
        title="Explore the Nourish Pro Ecosystem"
        subtitle="Explore the restaurant, real-estate, and community work that brings the Nourish Pro ecosystem together."
        slides={homeCarouselSlides}
      />
      <StatsSection />
      <WhyPartnerSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}