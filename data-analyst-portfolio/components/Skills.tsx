"use client";

import { useEffect, useState, useRef } from "react";

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Data Analysis",
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Excel", level: 88 },
      ],
      color: "blue",
    },
    {
      title: "Visualization",
      skills: [
        { name: "Tableau", level: 92 },
        { name: "Power BI", level: 88 },
        { name: "Matplotlib", level: 85 },
        { name: "Plotly", level: 80 },
      ],
      color: "indigo",
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Pandas", level: 93 },
        { name: "NumPy", level: 90 },
        { name: "Scikit-learn", level: 82 },
        { name: "Git", level: 85 },
      ],
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; gradient: string; text: string } } = {
      blue: {
        bg: "bg-blue-600",
        gradient: "from-blue-600 to-blue-400",
        text: "text-blue-600",
      },
      indigo: {
        bg: "bg-indigo-600",
        gradient: "from-indigo-600 to-indigo-400",
        text: "text-indigo-600",
      },
      purple: {
        bg: "bg-purple-600",
        gradient: "from-purple-600 to-purple-400",
        text: "text-purple-600",
      },
    };
    return colors[color];
  };

  return (
    <section
      id="skills"
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-16"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            return (
              <div
                key={category.title}
                className={`transition-all duration-1000 transform ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${(categoryIndex + 1) * 200}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 h-full">
                  <h3
                    className={`text-2xl font-bold font-[family-name:var(--font-poppins)] mb-6 ${colorClasses.text}`}
                  >
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-700 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`h-2.5 rounded-full bg-gradient-to-r ${colorClasses.gradient} transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${
                                (categoryIndex + 1) * 200 + skillIndex * 100
                              }ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 transition-all duration-1000 delay-700 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-poppins)] text-gray-900 mb-6 text-center">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Statistical Analysis",
                "Machine Learning",
                "Data Mining",
                "ETL Processes",
                "A/B Testing",
                "Predictive Modeling",
                "Data Warehousing",
                "Business Intelligence",
                "Data Cleaning",
                "Report Automation",
              ].map((competency, index) => (
                <span
                  key={competency}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 hover:scale-105"
                  style={{
                    animation: isVisible
                      ? `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
                      : "none",
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
