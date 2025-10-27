"use client";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    description: "White-washed buildings and stunning sunsets",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070",
    price: "From $1,299",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    description: "Tropical paradise with ancient temples",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038",
    price: "From $899",
  },
  {
    id: 3,
    name: "Paris, France",
    description: "The city of love and lights",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073",
    price: "From $1,499",
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    description: "Modern metropolis meets ancient tradition",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094",
    price: "From $1,699",
  },
  {
    id: 5,
    name: "Maldives",
    description: "Crystal clear waters and luxury resorts",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065",
    price: "From $2,299",
  },
  {
    id: 6,
    name: "Dubai, UAE",
    description: "Luxury shopping and ultramodern architecture",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070",
    price: "From $1,199",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-[#fafaf9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1c1917] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Popular Destinations
          </h2>
          <p className="text-lg text-[#44403c] max-w-2xl mx-auto">
            Discover the world's most breathtaking locations and create memories
            that will last a lifetime
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${destination.image}')`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-[#f97316] text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                  {destination.price}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {destination.name}
                </h3>
                <p className="text-white/90 mb-4">{destination.description}</p>
                <button className="bg-white text-[#14b8a6] px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform group-hover:scale-105 hover:bg-[#14b8a6] hover:text-white">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
