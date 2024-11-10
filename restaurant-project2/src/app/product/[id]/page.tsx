import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="single-product-page">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="image-container">
          <Image
            src={singleProduct.img}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}

      {/* TEXT CONTAINER */}
      <div className="text-container">
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        {/* Removed the id prop from Price */}
        <Price price={singleProduct.price} options={singleProduct.options} />
      </div>
    </div>
  );
};

export default SingleProductPage;
