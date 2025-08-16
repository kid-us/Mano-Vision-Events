import { hero } from "../assets";

const HeroSection = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${hero})`,
      }}
    >
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
          <span className="text-primary">Exquisite</span> Culinary Experiences
        </h1>
        <p className="text-xl sm:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto">
          Elevating your events with exceptional cuisine and impeccable service
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, "menu")}
            className="px-8 py-3 border border-primary text-black bg-primary hover:bg-primary/60 transition-colors duration-200 rounded font-semibold"
          >
            View Our Menu
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="text-white hover:text-primary transition-colors animate-bounce"
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

export default HeroSection;
