import { featuredProducts } from "../data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  console.log(featuredProducts);  // Debugging: Check if the data is available

  return (
    <div className="featured-wrapper">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div key={item.id} className="featured-item-container">
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="featured-item-image-container">
                {/* Use "layout='intrinsic'" for better responsiveness or "layout='responsive'" */}
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  layout="intrinsic" 
                  className="object-contain" 
                  width={500}  // Define a width for the image
                  height={300} // Define a height for the image
                />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="featured-item-text">
              <h1 className="featured-item-title">{item.title}</h1>
              <p className="featured-item-desc">{item.desc}</p>
              <span className="featured-item-price">${item.price}</span>
              <button className="featured-item-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
