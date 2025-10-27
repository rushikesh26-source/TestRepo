"use client";

import { useEffect, useState, useRef } from "react";

export default function Projects() {
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

  const projects = [
    {
      title: "Sales Performance Dashboard",
      description:
        "Interactive dashboard analyzing sales trends across multiple regions, providing real-time insights and forecasting capabilities.",
      technologies: ["Python", "Tableau", "SQL"],
      metrics: ["30% increase in sales efficiency", "Real-time data updates"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Customer Segmentation Analysis",
      description:
        "Machine learning project to segment customers based on behavior patterns, enabling targeted marketing strategies.",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      metrics: ["5 distinct customer segments", "25% improvement in targeting"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Financial Forecasting Model",
      description:
        "Predictive model for quarterly revenue forecasting using historical data and market indicators.",
      technologies: ["R", "Time Series", "Power BI"],
      metrics: ["95% accuracy rate", "Quarterly predictions"],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Supply Chain Optimization",
      description:
        "Data-driven analysis to optimize inventory levels and reduce operational costs across the supply chain.",
      technologies: ["SQL", "Excel", "Python"],
      metrics: ["20% cost reduction", "Improved inventory turnover"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Social Media Analytics",
      description:
        "Comprehensive analysis of social media engagement metrics to inform content strategy and audience growth.",
      technologies: ["Python", "API Integration", "Matplotlib"],
      metrics: ["40% engagement increase", "Data-driven content strategy"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Healthcare Data Analysis",
      description:
        "Analysis of patient data to identify trends and improve healthcare delivery and resource allocation.",
      technologies: ["R", "Tableau", "Statistical Analysis"],
      metrics: ["Improved patient outcomes", "Resource optimization"],
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section
      id="projects"
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
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-16"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col">
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                ></div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-poppins)] text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    {project.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600 mb-2"
                      >
                        <svg
                          className="w-4 h-4 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
