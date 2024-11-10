import Image from "next/image";
import React from "react";
import CountDown from "../components/CountDown"; // Adjust based on the actual location

const Offer = () => {
  return (
    <div className="offer-container">
      {/* TEXT CONTAINER */}
      <div className="text-container">
        <h1 className="offer-title">Delicious Burger & French Fry</h1>
        <p className="offer-description">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="order-button">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="image-container">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
