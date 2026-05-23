"use client";

import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-navy-950">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          {siteData.contact.title}
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 text-white"
          >
            <Mail className="w-6 h-6 text-orange-500" />
            <span className="text-lg">{siteData.contact.email}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 text-white"
          >
            <Phone className="w-6 h-6 text-orange-500" />
            <span className="text-lg">{siteData.contact.phone}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}