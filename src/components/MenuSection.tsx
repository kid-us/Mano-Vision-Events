export const MenuSection = () => {
  const menuItems = [
    {
      name: "Seared Scallops",
      description:
        "Pan-seared scallops with cauliflower purée, crispy pancetta and micro greens",
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Appetizer",
    },
    {
      name: "Beef Wellington",
      description:
        "Prime beef tenderloin wrapped in mushroom duxelles and puff pastry, served with red wine reduction",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Main Course",
    },
    {
      name: "Lobster Risotto",
      description:
        "Creamy arborio rice with butter-poached lobster, finished with mascarpone and chives",
      image:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Main Course",
    },
    {
      name: "Dark Chocolate Soufflé",
      description:
        "Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis",
      image:
        "https://images.unsplash.com/photo-1579954115563-e72bf1381629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Dessert",
    },
  ];
  return (
    <section id="menu" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">
            Menu Highlights
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Experience our signature dishes, crafted with precision and passion.
            Each plate is designed to delight the senses and showcase our
            culinary expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {menuItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="relative h-80">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-secondary px-3 py-1 text-white text-sm">
                  {item.category}
                </div>
              </div>
              <div className="p-6 bg-zinc-900 border-b-2 border-primtext-primary">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primtext-primary text-black font-semibold hover:bg-[#c29b29] transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};
