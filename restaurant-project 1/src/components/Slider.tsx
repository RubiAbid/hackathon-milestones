"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

// Slide data array
const data = [
  {
    id: 1,
    title: "Always fresh, always crispy, always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "We deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "The best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through slides
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000 // 4 seconds interval
    );

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* Text container */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 hover:bg-red-600 transition">
          Order Now
        </button>
      </div>
      
      {/* Image container */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
