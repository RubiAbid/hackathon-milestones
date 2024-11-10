import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="menu-page-container">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="menu-category"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`category-text text-${category.color}`}>
            <h1 className="category-title">{category.title}</h1>
            <p className="category-description">{category.desc}</p>
            <button className={`explore-button ${category.color === "black" ? "explore-button-white" : "explore-button-red"}`}>
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
