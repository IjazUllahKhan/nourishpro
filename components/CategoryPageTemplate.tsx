"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CategoryPageProps {
  title: string;
  description: string;
  image: string;
}

export default function CategoryPageTemplate({ title, description, image }: CategoryPageProps) {
  return (
    <div className="bg-black">
      <div className="relative h-96 w-full">
        <Image src={image} alt={title} fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white text-center"
          >
            {title}
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-white/80 leading-relaxed mb-8">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
          <p className="text-white/70 mb-4">
            At Nourish Pro, we are committed to delivering exceptional value through innovative solutions
            and dedicated service. Our team brings together expertise, passion, and a commitment to
            excellence in everything we do.
          </p>
          <p className="text-white/70">
            We believe in building lasting relationships with our clients and communities, creating
            positive impact that extends beyond business success.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}