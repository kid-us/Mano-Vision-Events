import "./App.css";
import { AboutSection } from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Marquee />
      </main>
      <Footer />
    </div>
  );
}

export default App;
