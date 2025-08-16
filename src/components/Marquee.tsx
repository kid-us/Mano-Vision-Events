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
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  // Divide into 2 rows
  const row1 = allImages.slice(0, 11);
  const row2 = allImages.slice(11, 22);

  // Modal state
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));

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
          style={{ "--num-items": row1.length } as React.CSSProperties}
        >
          <div className="marquee-track">
            {row1.map((t, i) => (
              <div
                className="marquee-item cursor-pointer bg-primary/5"
                style={{ "--item-position": t.id } as React.CSSProperties}
                onClick={() => openModal(i)}
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

        {/* Reverse Marquee */}
        <div
          className="marquee fadeout-horizontal mt-10"
          style={
            {
              "--num-items": row2.length,
              "--direction": "reverse",
            } as React.CSSProperties
          }
        >
          <div className="marquee-track">
            {row2.map((t, i) => (
              <div
                className="marquee-item cursor-pointer bg-primary/5"
                style={{ "--item-position": t.id } as React.CSSProperties}
                onClick={() => openModal(i + row1.length)}
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
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={closeModal}
          >
            ✖
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={prevImage}
          >
            <ChevronLeft className="bg-primary rounded text-black" />
          </button>
          <img
            src={allImages[currentIndex].img}
            alt={`Gallery ${allImages[currentIndex].id}`}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg object-contain"
          />
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={nextImage}
          >
            <ChevronRight className="bg-primary rounded text-black" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Marquee;
