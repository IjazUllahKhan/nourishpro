"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CategoryImageCycle {
  images: string[];
}

const categoryImages: Record<string, CategoryImageCycle> = {
  restaurants: {
    images: [
      "/images/restaurants.jpg",
      "/images/carousels/home/home-restaurant.jpg",
      "/images/carousels/restaurants/restaurant-dining.jpg",
    ],
  },
  "real-estate": {
    images: [
      "/images/real-estate.jpg",
      "/images/carousels/home/home-real-estate.jpg",
      "/images/carousels/real-estate/real-estate-exterior.jpg",
    ],
  },
  foundation: {
    images: [
      "/images/foundation.jpg",
      "/images/carousels/home/home-foundation.jpg",
      "/images/carousels/foundation/foundation-community.jpg",
    ],
  },
};

export default function CategorySlides() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(categoryImages).map(([categoryId, imageCycle], index) => (
            <motion.div
              key={categoryId}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <CategoryCard
                categoryId={categoryId}
                images={imageCycle.images}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CategoryInfo {
  title: string;
  description: string;
  href: string;
}

const categoryInfo: Record<string, CategoryInfo> = {
  restaurants: {
    title: "Restaurants",
    description: "Premium dining experiences across breakfast, lunch and dinner concepts",
    href: "/restaurants",
  },
  "real-estate": {
    title: "Real Estate",
    description: "Strategic real estate partnerships and site selection services",
    href: "/real-estate",
  },
  foundation: {
    title: "Nourish Foundation",
    description: "Community initiatives and giving back to neighborhoods",
    href: "/foundation",
  },
};

function CategoryCard({
  categoryId,
  images,
}: {
  categoryId: string;
  images: string[];
}) {
  const category = categoryInfo[categoryId]!;
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Link href={category.href} className="block group">
      <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
        {/* All images stacked, crossfade by opacity */}
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: index === currentImage ? 1 : 0,
              scale: index === currentImage ? 1.04 : 1,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={category.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h3 className="text-4xl font-bold text-white mb-2">{category.title}</h3>
          <p className="text-white/80 text-lg">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}