"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { Playfair_Display as PlayfairDisplayFont } from "next/font/google";

const PlayfairDisplay = PlayfairDisplayFont({
  weight: "700",
  subsets: ["latin"],
});

const images = [
  "/image/actitvies1.gif",
  "/image/actitives2.gif",
  "/image/actitvies3.gif",
  "/image/actitives4.gif",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext(); // Move to the next slide every 3 seconds
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <h1 className={`${PlayfairDisplay.className} text-3xl sm:text-4xl md:text-5xl text-center mb-8 sm:mb-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text shadow-lg mt-8`}>
        Activities
      </h1>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg mt-8 mb-8 border-4 border-blue-500">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-64 sm:h-80 relative">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>

        <div
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 cursor-pointer text-white rounded-full hover:bg-black/80 transition duration-300"
        >
          <AiOutlineArrowLeft size={24} />
        </div>

       
        <div
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-3 cursor-pointer text-white rounded-full hover:bg-black/80 transition duration-300"
        >
          <AiOutlineArrowRight size={24} />
        </div>

        {/* Dots (for navigation) */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer hover:bg-white ${
                currentIndex === index ? "bg-blue-500" : "bg-red-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
