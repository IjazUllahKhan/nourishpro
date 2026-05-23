"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function AboutSection() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-8"
        >
          {siteData.about.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/80 leading-relaxed"
        >
          {siteData.about.content}
        </motion.p>
      </div>
    </section>
  );
}