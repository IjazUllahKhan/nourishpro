"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Column 1: Logo and Address */}
          <div className="md:w-1/3">
            <Link href="/" className="text-3xl font-bold text-orange-500 mb-4 block">
              Nourish Pro
            </Link>
            <address className="text-gray-300 not-italic">
              1600 Rue Montgolfier<br />
              Laval, QC H7T 0A2<br />
              Canada
            </address>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:w-1/3">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link href="/restaurants" className="text-gray-300 hover:text-orange-500 transition-colors">
                Restaurants
              </Link>
              <Link href="/real-estate" className="text-gray-300 hover:text-orange-500 transition-colors">
                Real Estate
              </Link>
              <Link href="/foundation" className="text-gray-300 hover:text-orange-500 transition-colors">
                Foundation
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Column 3: Legal */}
          <div className="md:w-1/3">
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nourish Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}