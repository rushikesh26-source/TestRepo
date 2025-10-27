"use client";

import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-16"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    DATA
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold font-[family-name:var(--font-poppins)] text-gray-900 mb-6">
              Passionate About Data-Driven Solutions
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I'm a dedicated data analyst with a passion for uncovering insights
              hidden within complex datasets. With expertise in statistical
              analysis, data visualization, and business intelligence, I help
              organizations make informed decisions.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              My approach combines technical proficiency with strong business
              acumen, ensuring that every analysis translates into actionable
              strategies that drive growth and efficiency.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-700 font-medium">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-700 font-medium">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-indigo-600 mb-2">20+</div>
                <div className="text-gray-700 font-medium">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
