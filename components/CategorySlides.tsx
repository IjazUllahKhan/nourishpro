"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function CategorySlides() {
  return (
    <section className="py-20 px-4 bg-navy-950">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={category.href} className="block group">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="text-4xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-white/80 text-lg">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}