"use client";

import { useEffect, useState, useRef } from "react";

export default function Experience() {
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

  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Leading data analytics initiatives and mentoring junior analysts. Developed automated reporting systems that reduced manual work by 60%.",
      achievements: [
        "Implemented company-wide BI dashboard",
        "Led team of 5 data analysts",
        "Reduced reporting time by 60%",
      ],
      color: "blue",
    },
    {
      title: "Data Analyst",
      company: "Digital Marketing Agency",
      period: "2020 - 2022",
      description:
        "Analyzed marketing campaign performance and customer behavior patterns. Created data visualizations for executive presentations.",
      achievements: [
        "Improved campaign ROI by 35%",
        "Built 20+ interactive dashboards",
        "Conducted A/B testing analysis",
      ],
      color: "indigo",
    },
    {
      title: "Junior Data Analyst",
      company: "Financial Services Corp",
      period: "2019 - 2020",
      description:
        "Supported senior analysts in data collection, cleaning, and preliminary analysis. Developed SQL queries for data extraction.",
      achievements: [
        "Automated data cleaning processes",
        "Created 50+ SQL queries",
        "Assisted in quarterly reports",
      ],
      color: "purple",
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-poppins)] text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-16"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <div
                  className={`md:flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 md:px-8">
                    <div
                      className={`bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-medium mb-4">
                        {exp.period}
                      </div>
                      <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-gray-900 mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-blue-600 font-medium mb-4">
                        {exp.company}
                      </h4>
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center text-sm text-gray-700 ${
                              index % 2 === 0
                                ? "md:justify-end"
                                : "md:justify-start"
                            }`}
                          >
                            <svg
                              className={`w-4 h-4 text-green-500 ${
                                index % 2 === 0 ? "md:order-2 md:ml-2" : "mr-2"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div
          className={`mt-20 transition-all duration-1000 delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold font-[family-name:var(--font-poppins)] text-center mb-8 text-gray-900">
            Education & Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  B
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Bachelor of Science in Statistics
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">
                    University Name
                  </p>
                  <p className="text-gray-600 text-sm">2015 - 2019</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  C
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Data Analytics Professional Certificate
                  </h4>
                  <p className="text-indigo-600 font-medium mb-2">Google</p>
                  <p className="text-gray-600 text-sm">2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
