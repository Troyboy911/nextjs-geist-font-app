"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="deepdollz-glass border-b border-deepdollz-glass-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.svg"
              alt="Deepdollz logo with futuristic AI design and holographic crown"
              className="h-10 w-auto deepdollz-glow animate-pulse-neon"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/100x50?text=DEEPDOLLZ";
              }}
            />
            <span className="text-xl font-bold deepdollz-text-gradient font-['Orbitron']">
              DEEPDOLLZ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-deepdollz-neon-cyan transition-colors duration-300 font-['Exo_2'] font-medium"
            >
              Home
            </Link>
            <Link
              href="/deepdollz"
              className="text-gray-300 hover:text-deepdollz-neon-magenta transition-colors duration-300 font-['Exo_2'] font-medium"
            >
              DeepDollz
            </Link>
            <Link
              href="/glowdollz"
              className="text-gray-300 hover:text-deepdollz-neon-purple transition-colors duration-300 font-['Exo_2'] font-medium"
            >
              GlowDollz
            </Link>
            <Link
              href="/subscription"
              className="text-gray-300 hover:text-deepdollz-neon-cyan transition-colors duration-300 font-['Exo_2'] font-medium"
            >
              Subscribe
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-deepdollz-neon-cyan border border-deepdollz-neon-cyan rounded-lg hover:bg-deepdollz-neon-cyan hover:text-black transition-all duration-300 deepdollz-hover-glow"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="px-4 py-2 bg-gradient-to-r from-deepdollz-neon-cyan to-deepdollz-neon-magenta text-black rounded-lg font-semibold deepdollz-hover-glow transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-deepdollz-neon-cyan transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 deepdollz-glass rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-deepdollz-neon-cyan transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/deepdollz"
                className="block px-3 py-2 text-gray-300 hover:text-deepdollz-neon-magenta transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                DeepDollz
              </Link>
              <Link
                href="/glowdollz"
                className="block px-3 py-2 text-gray-300 hover:text-deepdollz-neon-purple transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                GlowDollz
              </Link>
              <Link
                href="/subscription"
                className="block px-3 py-2 text-gray-300 hover:text-deepdollz-neon-cyan transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Subscribe
              </Link>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Link
                  href="/auth/login"
                  className="px-4 py-2 text-center text-deepdollz-neon-cyan border border-deepdollz-neon-cyan rounded-lg hover:bg-deepdollz-neon-cyan hover:text-black transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-4 py-2 text-center bg-gradient-to-r from-deepdollz-neon-cyan to-deepdollz-neon-magenta text-black rounded-lg font-semibold transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
