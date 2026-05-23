"use client";

import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-3xl font-bold text-orange-500">
              {siteData.nav.logo}
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/" className="text-white/70 hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/restaurants" className="text-white/70 hover:text-orange-500 transition-colors">
              Restaurants
            </Link>
            <Link href="/real-estate" className="text-white/70 hover:text-orange-500 transition-colors">
              Real Estate
            </Link>
            <Link href="/foundation" className="text-white/70 hover:text-orange-500 transition-colors">
              Foundation
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50">
          <p>&copy; {new Date().getFullYear()} Nourish Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}