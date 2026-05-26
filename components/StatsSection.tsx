"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nourish Pro at a Glance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A growing multi-brand platform built around restaurant operations, franchise support, and community-focused growth.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-gray-900 font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}