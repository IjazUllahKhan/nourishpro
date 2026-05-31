"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { Building2, BarChart3, Handshake, Zap } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";

const realEstateCarouselSlides = [
  {
    image: "/images/carousels/real-estate/real-estate-exterior.jpg",
    title: "Strategic Properties",
    description: "Commercial and hospitality-focused spaces aligned with long-term ecosystem growth.",
  },
  {
    image: "/images/carousels/real-estate/real-estate-lobby.jpg",
    title: "Hospitality Interiors",
    description: "Guest-facing environments designed for comfort, quality, and operational value.",
  },
  {
    image: "/images/carousels/real-estate/real-estate-development.jpg",
    title: "Development Planning",
    description: "Site strategy, development planning, and partnership opportunities built around growth.",
  },
];

const capabilities = [
  {
    icon: Building2,
    title: "Development & Construction",
    description: "Identify and develop sites for restaurants, hospitality and mixed-use projects, with a focus on sustainable growth and strategic location selection.",
  },
  {
    icon: BarChart3,
    title: "Property Strategy & Management",
    description: "Manage properties and assets to maximise value while upholding brand standards and delivering exceptional guest experiences.",
  },
  {
    icon: Handshake,
    title: "Investment & Advisory",
    description: "Provide support and guidance for site selection, leasing, and strategic investment opportunities across our multi-brand ecosystem.",
  },
  {
    icon: Zap,
    title: "Technology & Innovation",
    description: "Leverage hospitality technology and innovation to optimise operations, efficiency and guest satisfaction across all locations.",
  },
];

const portfolioHighlights = [
  {
    title: "Hospitality Development",
    description: "Restaurant and hospitality properties designed to create memorable guest experiences while supporting franchise growth and community engagement.",
    image: "/images/carousels/real-estate/real-estate-exterior.jpg",
  },
  {
    title: "Commercial Property",
    description: "Strategic commercial locations that serve as anchors for our restaurant concepts and provide long-term value for partners and investors.",
    image: "/images/carousels/real-estate/real-estate-lobby.jpg",
  },
  {
    title: "Mixed-Use Project",
    description: "Integrated developments combining dining, retail and community spaces to create vibrant destinations that drive traffic and engagement.",
    image: "/images/carousels/real-estate/real-estate-development.jpg",
  },
  {
    title: "Community-Focused Site",
    description: "Properties selected for their potential to strengthen neighbourhoods and provide meaningful gathering places for local communities.",
    image: "/images/carousels/real-estate/real-estate-exterior.jpg",
  },
];

export default function RealEstatePage() {
  const category = siteData.categories.find((c) => c.id === "real-estate")!;

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="relative h-96 w-full">
        <Image src={category.image} alt="Real Estate" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white text-center"
          >
            Real Estate
          </motion.h1>
        </div>
      </div>

      {/* Page Hero Subtitle */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl text-gray-800">
            Unlock growth through strategic real-estate development and partnerships.
          </p>
        </div>
      </section>

      {/* Real Estate Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-8"
          >
            Real Estate Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed text-center"
          >
            Nourish Pro's real-estate initiatives support its multi-brand ecosystem by finding, developing, and managing properties that complement its restaurant and community impact goals. Our real-estate opportunities span hospitality, commercial and mixed-use projects, with a focus on strategic site selection and long-term value creation for partners and investors.
          </motion.p>
        </div>
      </section>

      {/* Property Highlights Carousel */}
      <ImageCarousel
        title="Property & Development Highlights"
        subtitle="A visual look at the spaces, planning, and development opportunities that support Nourish Pro's growth."
        slides={realEstateCarouselSlides}
        accentColor="amber"
      />

      {/* Capabilities Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Our Real Estate Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Portfolio Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden">
                  <Image src={highlight.image} alt={highlight.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Responsibility */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-8"
          >
            Sustainability & Responsibility
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Nourish Pro incorporates sustainable development practices across its real-estate initiatives, prioritising environmental stewardship and creating positive impacts in the communities where we operate. From energy-efficient building designs to waste reduction programs, our commitment to responsible development aligns with our broader mission of community impact and franchisee success.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Discuss Real-Estate Opportunities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Connect with the Nourish Pro team to explore real-estate partnerships and investment opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Contact Our Team
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}