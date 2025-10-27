"use client";

const packages = [
  {
    id: 1,
    name: "Beach Paradise",
    duration: "7 Days / 6 Nights",
    price: "$1,499",
    features: [
      "Luxury beachfront resort",
      "Daily breakfast included",
      "Water sports activities",
      "Sunset cruise",
      "Airport transfers",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "Cultural Explorer",
    duration: "10 Days / 9 Nights",
    price: "$2,299",
    features: [
      "Guided city tours",
      "Museum & heritage site visits",
      "Local cuisine experiences",
      "Traditional performances",
      "Premium accommodation",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Adventure Seeker",
    duration: "5 Days / 4 Nights",
    price: "$1,899",
    features: [
      "Mountain trekking",
      "Rock climbing sessions",
      "Camping under stars",
      "Professional guides",
      "All equipment included",
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1c1917] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Travel Packages
          </h2>
          <p className="text-lg text-[#44403c] max-w-2xl mx-auto">
            Choose from our carefully curated travel packages designed to give
            you the best experience
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl ${
                pkg.popular
                  ? "shadow-2xl border-2 border-[#14b8a6] scale-105"
                  : "shadow-lg border border-[#e7e5e4]"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-[#f97316] text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm shadow-lg z-10">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div
                className={`p-8 text-white ${
                  pkg.popular ? "gradient-primary" : "bg-[#0284c7]"
                }`}
              >
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {pkg.name}
                </h3>
                <p className="text-white/90 mb-4">{pkg.duration}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-white/80 ml-2">per person</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8 bg-white">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#14b8a6] mr-3 text-xl">✓</span>
                      <span className="text-[#44403c]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? "bg-[#14b8a6] hover:bg-[#0d9488] text-white"
                      : "bg-[#f5f5f4] hover:bg-[#14b8a6] text-[#1c1917] hover:text-white"
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
