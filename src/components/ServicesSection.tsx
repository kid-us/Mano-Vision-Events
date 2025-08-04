import { Users, Briefcase, Wine } from "lucide-react";
export const ServicesSection = () => {
  const services = [
    {
      icon: <Users size={40} className="text-primary" />,
      title: "Weddings & Celebrations",
      description:
        "Create unforgettable memories with our bespoke wedding and celebration catering services, tailored to your unique vision.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Briefcase size={40} className="text-primary" />,
      title: "Corporate Events",
      description:
        "Impress clients and colleagues with sophisticated catering solutions for meetings, conferences, and corporate gatherings.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      icon: <Wine size={40} className="text-primary" />,
      title: "Private Dining",
      description:
        "Experience restaurant-quality dining in the comfort of your home with our private chef and service staff.",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <section id="services" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#8B0000] mx-auto mt-4"></div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            We offer a range of premium catering services to meet your specific
            needs, each delivered with our signature attention to detail and
            culinary excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black border border-zinc-800 hover:border-primary transition-colors p-6 flex flex-col"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 flex-grow">
                {service.description}
              </p>
              <div className="h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <button className="mt-6 py-2 px-4 border border-primary text-primary hover:bg-primary hover:text-black transition-colors w-full">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
