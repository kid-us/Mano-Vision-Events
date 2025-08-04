import { useEffect, useState } from "react";
import { MenuIcon, X } from "lucide-react";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black bg-opacity-95 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-[#D4AF37]">
              Mano-Vision
            </span>
            <span className="text-2xl ml-1 text-white">Events</span>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Services
            </a>
            <a
              href="#menu"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Menu
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              Testimonials
            </a>
            <button className="px-5 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors">
              Contact Us
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block py-2 px-3 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 px-3 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block py-2 px-3 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#menu"
              className="block py-2 px-3 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </a>
            <a
              href="#testimonials"
              className="block py-2 px-3 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <button className="w-full text-left py-2 px-3 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
