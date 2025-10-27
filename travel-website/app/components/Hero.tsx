"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070')`,
          }}
        ></div>
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Discover Your Next Adventure
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 animate-slide-up max-w-3xl mx-auto">
          Explore breathtaking destinations, create unforgettable memories, and
          experience the world like never before
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale">
          <button className="bg-[#14b8a6] hover:bg-[#0d9488] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full sm:w-auto">
            Explore Destinations
          </button>
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
            View Packages
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
