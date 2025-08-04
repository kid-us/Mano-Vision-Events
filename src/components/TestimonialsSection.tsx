import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Elegance Catering exceeded all our expectations. The food was exquisite, the presentation stunning, and the service impeccable. Our wedding guests are still raving about the meal!",
      name: "Alexandra & James",
      event: "Wedding Reception",
      image:
        "https://images.unsplash.com/photo-1545133875-55b651cbf4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
    {
      quote:
        "Working with Elegance for our annual corporate gala was a seamless experience. Their attention to detail and ability to accommodate our specific needs made all the difference.",
      name: "Michael Roberts",
      event: "Corporate Gala",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
    {
      quote:
        "The private dining experience that Elegance created for my partner's birthday was nothing short of magical. The chef's custom menu was perfectly tailored to our preferences.",
      name: "Sarah Johnson",
      event: "Private Celebration",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  return (
    <section id="testimonials" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Client Testimonials
          </h2>
          <div className="w-24 h-1 bg-[#8B0000] mx-auto mt-4"></div>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-black border border-zinc-800 p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-center italic text-gray-300 mb-8">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-primary">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-400">
                  {testimonials[currentIndex].event}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 border border-primary text-primary hover:bg-primary hover:text-black transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 border border-primary text-primary hover:bg-primary hover:text-black transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-primary" : "bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
