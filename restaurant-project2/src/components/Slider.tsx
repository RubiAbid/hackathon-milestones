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
    <div className="slider-container">
      {/* Text container */}
      <div className="text-container">
        <h1 className="slide-title">
          {data[currentSlide].title}
        </h1>
        <button className="order-button">
          Order Now
        </button>
      </div>
      
      {/* Image container */}
      <div className="image-container">
        <Image
          src={data[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          fill
          className="image"
        />
      </div>
    </div>
  );
};

export default Slider;
