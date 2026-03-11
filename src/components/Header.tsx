'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center">
            <Image 
              src="/Logo/image-removebg-preview.png" 
              alt="HCPC Logo" 
              width={220} 
              height={88}
              className="h-20 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-purple-600 transition">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition">
              About
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-purple-600 transition font-semibold">
              Log In
            </Link>
            <Link href="/register" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition font-semibold">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-purple-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/login"
              className="block py-2 text-gray-700 hover:text-purple-600 font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="block py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg text-center font-semibold mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
