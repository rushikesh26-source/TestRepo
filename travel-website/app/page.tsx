import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Destinations />
      <Packages />
      <Testimonials />
      <Footer />
    </main>
  );
}
