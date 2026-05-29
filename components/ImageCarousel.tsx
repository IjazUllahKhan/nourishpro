"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  image: string;
  title?: string;
  description?: string;
  href?: string;
}

interface ImageCarouselProps {
  title: string;
  subtitle?: string;
  slides: CarouselSlide[];
  accentColor?: "orange" | "amber" | "emerald";
}

export default function ImageCarousel({ title, subtitle, slides, accentColor = "orange" }: ImageCarouselProps) {
  const accentClasses = {
    orange: { active: "bg-orange-500", hover: "hover:bg-orange-600" },
    amber: { active: "bg-amber-500", hover: "hover:bg-amber-600" },
    emerald: { active: "bg-emerald-500", hover: "hover:bg-emerald-600" },
  };
  const accent = accentClasses[accentColor];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <section
      className="py-20 px-4 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title || "Carousel image"}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                {slides[currentIndex].title && (
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    {slides[currentIndex].title}
                  </h3>
                )}
                {slides[currentIndex].description && (
                  <p className="text-lg text-white/90 max-w-2xl">
                    {slides[currentIndex].description}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all ${
                  index === currentIndex
                    ? `w-8 h-3 ${accent.active} rounded-full`
                    : "w-3 h-3 bg-gray-300 border border-gray-400 rounded-full hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}