"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#1c1917] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Get exclusive travel deals, tips, and destination guides delivered
              to your inbox
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
                required
              />
              <button
                type="submit"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            {subscribed && (
              <p className="mt-4 text-[#14b8a6] font-semibold animate-fade-in">
                Thank you for subscribing! Check your inbox for exclusive deals.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4
              className="text-2xl font-bold mb-4 text-[#14b8a6]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Wanderlust
            </h4>
            <p className="text-white/70 mb-4">
              Your trusted partner in creating unforgettable travel experiences
              around the globe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/70 hover:text-[#14b8a6] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="text-white/70 hover:text-[#14b8a6] transition-colors"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="text-white/70 hover:text-[#14b8a6] transition-colors"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/70 hover:text-[#14b8a6] transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Support</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#14b8a6] transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#14b8a6] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#14b8a6] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#14b8a6] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact</h5>
            <ul className="space-y-2 text-white/70">
              <li>Email: info@wanderlust.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Travel Street</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Wanderlust Travel. All rights reserved. Made with passion for
            travelers.
          </p>
        </div>
      </div>
    </footer>
  );
}
