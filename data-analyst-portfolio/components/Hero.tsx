"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Data Analyst",
    "Data Visualizer",
    "Business Intelligence Expert",
    "SQL Specialist",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-poppins)] mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              <span className="text-gray-900">Your Name</span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="h-16 mb-8">
              <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                <span className="inline-block transition-all duration-500 transform">
                  {roles[currentRole]}
                </span>
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Transforming raw data into actionable insights through advanced
              analytics, visualization, and strategic thinking.
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
