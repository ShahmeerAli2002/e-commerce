"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Category() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  
  const categories = [
    { type: 'Action toys', img: '/image/category1.jpg', quantity: 10 },
    { type: 'Teddy bear', img: '/image/category2.png', quantity: 8 },
    { type: 'Dolls', img: '/image/category3.jpeg', quantity: 8 },
    { type: 'Remote Control Car', img: '/image/category4.jpg', quantity: 8 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [categories.length]);

  return (
    <div className="container mx-auto px-4 text-center text-white mt-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-600">Featured Toys</h2>
      <h2 className="text-2xl sm:text-4xl italic font-extrabold mb-8 text-red-800 tracking-wide text-shadow-lg">
        Discover Our Toy Collection
      </h2>
   
      <div className="bg-[url('/image/lp.gif')] bg-cover bg-center bg-no-repeat py-5 mt-16 sm:mt-32 min-h-[40vh] w-full relative">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ease-in-out ${
                index === currentCategoryIndex 
                  ? 'scale-105 sm:scale-110 z-10' 
                  : 'scale-95 sm:scale-90 opacity-70'
              }`}
            >
              <Image
                src={category.img}
                alt={`Category image of ${category.type}`}
                className="mx-auto object-cover rounded-2xl shadow-lg border-4 border-red-700"
                width={250}
                height={250}
              />
              <h3 className="text-base sm:text-lg font-bold mt-2 custom-font">
                {category.type}
              </h3>
              <p className="text-xs sm:text-sm text-red-600 font-italic font-semibold">
                {category.quantity} items
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
