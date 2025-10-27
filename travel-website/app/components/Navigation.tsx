"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className={`text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-[#14b8a6]" : "text-white"
              }`}
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Wanderlust
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`font-medium transition-colors duration-300 hover:text-[#14b8a6] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#destinations"
              className={`font-medium transition-colors duration-300 hover:text-[#14b8a6] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Destinations
            </a>
            <a
              href="#packages"
              className={`font-medium transition-colors duration-300 hover:text-[#14b8a6] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Packages
            </a>
            <a
              href="#testimonials"
              className={`font-medium transition-colors duration-300 hover:text-[#14b8a6] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Testimonials
            </a>
            <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-colors duration-300 ${
                  isScrolled ? "bg-gray-700" : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-colors duration-300 ${
                  isScrolled ? "bg-gray-700" : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-colors duration-300 ${
                  isScrolled ? "bg-gray-700" : "bg-white"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col space-y-4 bg-white rounded-lg p-6 shadow-xl">
              <a
                href="#home"
                className="text-gray-700 font-medium hover:text-[#14b8a6] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#destinations"
                className="text-gray-700 font-medium hover:text-[#14b8a6] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </a>
              <a
                href="#packages"
                className="text-gray-700 font-medium hover:text-[#14b8a6] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Packages
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 font-medium hover:text-[#14b8a6] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2 rounded-full font-medium transition-all duration-300">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
