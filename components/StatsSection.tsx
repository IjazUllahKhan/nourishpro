"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "99%", label: "Client Satisfaction" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-navy-950 to-black">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-white/70 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}