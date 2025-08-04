export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            About Us
          </h2>
          <div className="w-24 h-1 bg-[#8B0000] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Crafting Culinary <span className="text-primary">Excellence</span>{" "}
              Since 2005
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At Elegance Catering, we believe that every event deserves
              exceptional cuisine. Our team of world-class chefs combines
              artistic presentation with extraordinary flavors to create
              memorable dining experiences that will leave your guests
              impressed.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              From intimate gatherings to grand celebrations, we approach each
              event with the same dedication to quality and service. We source
              only the finest ingredients, with a focus on seasonal and local
              produce whenever possible.
            </p>
            <div className="flex items-center">
              <div className="w-16 h-1 bg-primary"></div>
              <p className="ml-4 text-primary italic">
                Chef Michael Laurent, Founder
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary"></div>
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Chef preparing gourmet food"
                className="w-full h-96 object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
