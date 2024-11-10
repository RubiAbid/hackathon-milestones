import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="category-page-container">
      {pizzas.map((item) => (
        <Link
          className="category-item"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="image-container">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="text-container">
            <h1 className="title">{item.title}</h1>
            <h2 className="price">${item.price}</h2>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;

