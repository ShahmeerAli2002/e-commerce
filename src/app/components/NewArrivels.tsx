  "use client";

  import React, { useState, useEffect } from 'react';
  import ProductData from "@/app/utils/ProductData";
  import { Playfair_Display as PlayfairDisplayFont } from "next/font/google";
  import ProductCard, { IProduct } from "../components/ProductCard";

  const PlayfairDisplay = PlayfairDisplayFont({
    weight: "700",
    subsets: ["latin"],
  });

  const NewArrivals = () => {
      const [activeCategory, setActiveCategory] = useState("All");
      const [products, setProducts] = useState<IProduct[]>([]);
      const [categories, setCategories] = useState<string[]>([]);

  
      const getUniqueCategories = () => {
          const allCategories = ProductData.map((product: IProduct) => product.category);
          return ["All", ...Array.from(new Set(allCategories))];
      };

      const filterProducts = (category: string) => {
          setActiveCategory(category);
          if (category === "All") {
              setProducts(shuffleArray(ProductData).slice(0, 20));
          } else {
              const filtered = ProductData.filter(
                  (product: IProduct) =>
                      product.category.toLowerCase() === category.toLowerCase()
              );
              setProducts(shuffleArray(filtered).slice(0, 20));
          }
      };

      const shuffleArray = (array: IProduct[]) => {
          return [...array].sort(() => Math.random() - 0.5);
      };

      useEffect(() => {
          setCategories(getUniqueCategories() as string[]);
          filterProducts("All");
      }, [filterProducts]);

      return (
          <section className="bg-gray-100 py-8 sm:py-16">
              <div className="container mx-auto px-4">
                  <h2
                      className={`${PlayfairDisplay.className} text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text`}
                  >
                      New Arrivals
                  </h2>
                  <div className="flex flex-wrap justify-center mb-8 sm:mb-12">
                      {categories.map((category) => (
                          <button
                              key={category}
                              onClick={() => filterProducts(category)}
                              className={`mx-1 sm:mx-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base mb-2 sm:mb-0 ${
                                  activeCategory === category
                                      ? "bg-blue-500 text-white"
                                      : "bg-white text-gray-700 hover:bg-gray-200"
                              }`}
                          >
                              {category}
                          </button>
                      ))}
                  </div>
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