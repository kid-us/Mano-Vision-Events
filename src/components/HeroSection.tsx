import { ArrowRight } from "lucide-react";
export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      }}
    >
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
          <span className="text-[#D4AF37]">Exquisite</span> Culinary Experiences
        </h1>
        <p className="text-xl sm:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
          Elevating your events with exceptional cuisine and impeccable service
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-[#D4AF37] text-black font-semibold hover:bg-[#c29b29] transition-colors flex items-center justify-center">
            Book a Consultation <ArrowRight size={18} className="ml-2" />
          </button>
          <button className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:bg-opacity-10 transition-colors">
            View Our Menu
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="text-white hover:text-[#D4AF37] transition-colors animate-bounce"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};
