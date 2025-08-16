import { Wine, Heart, CalendarRange } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Heart fill="#d4af37" size={40} className="text-primary" />,
      title: "גריל שף",
      description:
        "אנחנו מביאים את הבשר האיכותי ביותר, בגריל שהופך כל ביס לחוויה. מתאים לאירועים, אירוח משפחתי, מסיבות או ארוחה מפנקת",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "עד 50 איש",
    },
    {
      icon: <CalendarRange size={40} className="text-primary" />,
      title: "קייטרינג",
      description:
        "קייטרינג בשרי עם מגוון אפשרויות צלייה, מלווה בסלטים ופחמימות לבחירתכם. אפשרות הכנה במקום או מראש",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "עד 50 איש",
    },
    {
      icon: <Wine size={40} className="text-primary" />,
      title: "אירועי בוטיק",
      description:
        "מביאים את האירוע המושלם לכל מקום בארץ עם מגוון רחב של בשרים איכותי המותאם לדמיונכם ורצונכם",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      capacity: "עד 30 איש",
    },
  ];
  return (
    <section id="services" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            השירות שלנו
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            אנו מציעים מגוון רחב של שירותי קייטרינג ברמה הגבוהה ביותר על מנת
            לעמוד בציפיותכם, עם תשומת לב לפרטים הקטנים ומצויינות קולינרית
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black border border-primary transition-colors p-6 flex flex-col"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-primary transition-colors">
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
              <p className="mt-5 text-xl text-primary">{service.capacity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
