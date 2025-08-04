import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-primary">ELEGANCE</span>
              <span className="text-2xl ml-1 text-white">Catering</span>
            </div>
            <p className="text-gray-400 mb-6">
              Elevating your events with exceptional cuisine and impeccable
              service since 2005.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-primary mr-3 mt-1" />
                <p className="text-gray-400">
                  123 Gourmet Avenue, New York, NY 10001
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-primary mr-3" />
                <p className="text-gray-400">(212) 555-1234</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-primary mr-3" />
                <p className="text-gray-400">info@elegancecatering.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Elegance Catering. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
