"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "Wanderlust Travel made our honeymoon absolutely magical! The attention to detail and personalized service exceeded all our expectations. We can't wait to book our next adventure with them!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    text: "I've traveled with many agencies, but Wanderlust stands out. Their local guides were knowledgeable, the accommodations were perfect, and every moment was well-planned yet flexible.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    text: "An unforgettable experience from start to finish! The cultural immersion and authentic experiences they provided were beyond anything I could have imagined. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            What Our Travelers Say
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy travelers
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-6xl text-[#14b8a6]/20 font-serif">
              "
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 text-center">
              <div className="mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-[#f97316] text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg sm:text-xl text-[#44403c] mb-8 leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
              <div className="border-t border-[#e7e5e4] pt-6">
                <h4 className="text-xl font-bold text-[#1c1917] mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#44403c]">{testimonials[currentIndex].location}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-[#14b8a6] hover:bg-[#0d9488] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[#14b8a6] w-8"
                        : "bg-[#d6d3d1] hover:bg-[#14b8a6]/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[#14b8a6] hover:bg-[#0d9488] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
