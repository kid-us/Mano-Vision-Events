import React, { useState } from "react";
import "./marquee.css";

import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyOne,
  twentyTwo,
} from "../assets/catering";
import { X } from "lucide-react";

interface Testimony {
  id: number;
  img: string;
}

const Marquee = () => {
  const allImages: Testimony[] = [
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
    { id: 5, img: five },
    { id: 6, img: six },
    { id: 7, img: seven },
    { id: 8, img: eight },
    { id: 9, img: nine },
    { id: 10, img: ten },
    { id: 11, img: eleven },
    { id: 12, img: twelve },
    { id: 13, img: thirteen },
    { id: 14, img: fourteen },
    { id: 15, img: fifteen },
    { id: 16, img: sixteen },
    { id: 17, img: seventeen },
    { id: 18, img: eighteen },
    { id: 19, img: nineteen },
    { id: 20, img: twenty },
    { id: 21, img: twentyOne },
    { id: 22, img: twentyTwo },
  ];

  // Modal state
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

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

        {/* Forward Marquee */}
        <div
          className="marquee fadeout-horizontal"
          style={{ "--num-items": allImages.length } as React.CSSProperties}
        >
          <div className="marquee-track">
            {allImages.map((t) => (
              <div
                className="marquee-item cursor-pointer bg-primary/5"
                style={{ "--item-position": t.id } as React.CSSProperties}
                onClick={() => openModal()}
                key={t.id}
              >
                <img
                  src={t.img}
                  className="h-full !object-contain"
                  alt={`Gallery - ${t.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-80 flex items-center justify-center z-50 p-4">
          {/* Modal Content */}
          <div className="relative bg-black/70 border border-zinc-800 overflow-x-hidden rounded-lg p-4 w-full max-w-5xl max-h-[80vh] overflow-auto">
            {/* Close Button */}
            <button
              className="fixed lg:top-16 lg:right-50 right-2 top-5 text-white text-2xl z-50"
              onClick={closeModal}
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {allImages.map((t) => (
                <div
                  key={t.id}
                  className="w-full rounded-lg border border-primary overflow-hidden transform transition hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={t.img}
                    alt={`Gallery ${t.id}`}
                    className="w-full h-48 md:h-60 object-contain bg-black"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Marquee;
