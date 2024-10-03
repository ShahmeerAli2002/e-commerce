"use client";

import React, { useState, useEffect } from "react";
import { Playfair_Display as PlayfairDisplayFont } from "next/font/google";
import ProductData from "@/app/utils/ProductData";
import ProductCard, { IProduct } from "@/app/components/ProductCard";

const PlayfairDisplay = PlayfairDisplayFont({
  weight: "700",
  subsets: ["latin"],
});

// const categories = [""];
const ageGroups = ["All Ages", "0-3 Years", "4-7 Years", "8-12 Years", "13+ Years"];

const NewArrivals = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeAgeGroup, setActiveAgeGroup] = useState("All Ages");
  const [products, setProducts] = useState<IProduct[]>([]);

  const filterProducts = (category: string, ageGroup: string) => {
    setActiveCategory(category);
    setActiveAgeGroup(ageGroup);

    let filteredProducts = ProductData;

    if (category !== "All") {
      filteredProducts = filteredProducts.filter(
        (product: IProduct) => product.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (ageGroup !== "All Ages") {
      filteredProducts = filteredProducts.filter(
        (product: IProduct) => product.ageGroup === ageGroup
      );
    }

    setProducts(shuffleArray(filteredProducts).slice(0, 12));
  };

  const shuffleArray = (array: IProduct[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    filterProducts("All", "All Ages");
  }, [filterProducts]);

  return (
    <section className="bg-gray-100 py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <h2
          className={`${PlayfairDisplay.className} text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text`}
        >
           Kids Products by Age
        </h2>

       

        {/* Age Group Filter */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12">
          {ageGroups.map((ageGroup) => (
            <button
              key={ageGroup}
              onClick={() => filterProducts(activeCategory, ageGroup)}
              className={`mx-1 sm:mx-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base mb-2 sm:mb-0 ${
                activeAgeGroup === ageGroup
                  ? "bg-purple-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {ageGroup}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
          {products.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              sales={product.sales}
              category={product.category}
              ageGroup={product.ageGroup}  
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
