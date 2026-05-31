"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import ImageCarousel from "@/components/ImageCarousel";

const restaurantsCarouselSlides = [
  {
    image: "/images/carousels/restaurants/restaurant-dining.jpg",
    title: "Dining Atmosphere",
    description: "Warm, premium dining spaces designed around memorable guest experiences.",
  },
  {
    image: "/images/carousels/restaurants/restaurant-team.jpg",
    title: "Restaurant Team",
    description: "People-focused operations supported by training, service standards, and brand culture.",
  },
  {
    image: "/images/carousels/restaurants/restaurant-kitchen.jpg",
    title: "Kitchen Operations",
    description: "Fresh preparation, consistent systems, and operational support for restaurant growth.",
  },
];

const restaurantConcepts = [
  { name: "Coco Frutti", logo: "/images/brands/coco-frutti.png", color: "bg-pink-50" },
  { name: "Coco Loco", logo: "/images/brands/coco-loco.png", color: "bg-lime-50" },
  { name: "Shack Attakk", logo: "/images/brands/shack-attakk.png", color: "bg-cyan-500" },
  { name: "L'Oeuf Doré", logo: "/images/brands/loeuf-dore.png", color: "bg-slate-800" },
  { name: "Breakfast Club", logo: "/images/brands/resto-logo.png", color: "bg-blue-600" },
  { name: "Réveil Matin", logo: "/images/brands/reveil-matin.png", color: "bg-amber-100" },
];

const franchiseSupport = [
  {
    title: "Real Estate & Site Selection",
    description: "Strategic location guidance and site evaluation for optimal market positioning.",
  },
  {
    title: "Training & Operations",
    description: "Comprehensive training programs and operational systems for consistent execution.",
  },
  {
    title: "Marketing & Brand Building",
    description: "Brand development and marketing support to drive customer engagement.",
  },
  {
    title: "Supply Chain & Purchasing",
    description: "Efficient supply chain management and product sourcing for cost optimization.",
  },
];

const franchiseSteps = [
  { number: 1, label: "Information on the Brand" },
  { number: 2, label: "Submit an Application" },
  { number: 3, label: "Pre-Selection Qualification Process" },
  { number: 4, label: "Verification Process" },
  { number: 5, label: "Interviews and Evaluations" },
  { number: 6, label: "Site Discussions and Obtaining Financing" },
  { number: 7, label: "Construction Work" },
  { number: 8, label: "Finalize Agreements and Begin Training" },
  { number: 9, label: "Opening of Your Restaurant" },
];

export default function RestaurantsPage() {
  const category = siteData.categories.find((c) => c.id === "restaurants")!;

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="relative h-96 w-full">
        <Image src={category.image} alt="Restaurants" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white text-center"
          >
            Restaurants
          </motion.h1>
        </div>
      </div>

      {/* Page Hero Subtitle */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl text-gray-800">
            A multi-brand restaurant platform built around memorable guest experiences, franchise growth, and operational support.
          </p>
        </div>
      </section>

      {/* Restaurant Group Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-8"
          >
            Restaurant Group Overview
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed text-center"
          >
            Nourish Pro operates as a multi-brand restaurant group and franchisor. We focus on breakfast, lunch, and dinner restaurant experiences. Our platform supports growth through brand development, franchise partnerships, and proven operational systems. With over 60 restaurants across Quebec and Ontario, we continue expanding our footprint while maintaining quality and consistency.
          </motion.p>
        </div>
      </section>

      {/* Restaurant Experiences Carousel */}
      <ImageCarousel
        title="Restaurant Experiences"
        subtitle="A look inside the dining spaces, teams, and operations behind the Nourish Pro restaurant platform."
        slides={restaurantsCarouselSlides}
      />

      {/* Our Brands */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Our Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 text-center mb-12"
          >
            With over 60 restaurants across Quebec and Ontario.
          </motion.p>
          <div className="flex flex-col items-center">
            {/* Brand logos row */}
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              {restaurantConcepts.map((concept, index) => (
                <motion.div
                  key={concept.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full flex items-center justify-center ${concept.color} shadow-lg overflow-hidden`}>
                    <div className="relative w-full h-full p-4">
                      <Image
                        src={concept.logo}
                        alt={concept.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 128px, 160px"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Own a Franchise Tile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: restaurantConcepts.length * 0.1 }}
              className="text-center"
            >
              <Link href="/#contact" className="block">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full flex items-center justify-center bg-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                  <span className="text-white font-bold text-center px-2 leading-tight text-sm sm:text-base">
                    OWN A FRANCHISE
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Franchise Support */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Franchise Support
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {franchiseSupport.map((support, index) => (
              <motion.div
                key={support.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{support.title}</h3>
                <p className="text-gray-600 text-sm">{support.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9-Step Franchise Journey */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-4"
          >
            Become a Franchise Owner in 9 Easy Steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            Our streamlined franchise process guides you from initial interest to restaurant opening.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {franchiseSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <p className="text-white font-medium">{step.label}</p>
              </motion.div>
            ))}
          </div>
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
            Ready to Grow With Nourish Pro?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Connect with the Nourish Pro team to explore franchise opportunities, brand growth, and restaurant partnerships.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Start a Franchise Inquiry
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}