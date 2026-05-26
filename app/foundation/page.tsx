"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { Heart, GraduationCap, UtensilsCrossed, Leaf, Users, Handshake, Globe, Activity } from "lucide-react";

const programmes = [
  {
    icon: Heart,
    title: "Community Support",
    description: "Food drives, local events and support for families in need across the communities where we operate.",
  },
  {
    icon: GraduationCap,
    title: "Youth & Education",
    description: "Scholarships, mentorships and youth leadership initiatives that inspire the next generation.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Nutrition",
    description: "School breakfast programmes and community kitchens that promote healthy eating habits.",
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    description: "Projects that promote healthy ecosystems and sustainable practices for a better future.",
  },
];

const impactStatements = [
  {
    icon: Users,
    text: "Supporting families across our communities with nutritious meals.",
  },
  {
    icon: GraduationCap,
    text: "Inspiring the next generation through education and mentorship.",
  },
  {
    icon: Handshake,
    text: "Partnering with local organisations for sustainable development.",
  },
  {
    icon: Activity,
    text: "Promoting healthy lifestyles through sports and wellness programmes.",
  },
];

export default function FoundationPage() {
  const category = siteData.categories.find((c) => c.id === "foundation")!;

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="relative h-96 w-full">
        <Image src={category.image} alt="Nourish Foundation" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white text-center"
          >
            Nourish Foundation
          </motion.h1>
        </div>
      </div>

      {/* Page Hero Subtitle */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-xl text-gray-800">
            Empowering communities through nourishment, education and opportunity.
          </p>
        </div>
      </section>

      {/* Foundation Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-8"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed text-center mb-6"
          >
            The Nourish Foundation is the philanthropic arm of Nourish Pro, dedicated to making a meaningful impact in the communities we serve. Our mission encompasses community support, youth development, education, sustainability and wellness initiatives.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed text-center"
          >
            Working with trusted partners, we focus on food security, youth mentorship, environmental stewardship and sports programmes. These efforts align with Nourish Pro's broader commitment to franchisee success and community impact, creating lasting positive change where we live and work.
          </motion.p>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Our Programmes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programmes.map((programme, index) => (
              <motion.div
                key={programme.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <programme.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{programme.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{programme.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Making a Difference
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStatements.map((statement, index) => (
              <motion.div
                key={statement.text}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <statement.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-gray-300 text-sm">{statement.text}</p>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Join Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Support the Nourish Foundation by volunteering, donating, partnering or spreading the word about our mission to strengthen communities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Connect with Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}