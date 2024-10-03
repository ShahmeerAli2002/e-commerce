"use client";
import Link from "next/link";

import React, { useState, useEffect, useCallback } from "react";
import { FaShopify } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAppSelector } from "../redux/hooks";
import Image from "next/image";

interface NavBarProps {
  setShowCart: (show: boolean) => void;
}

const NavBar = ({ setShowCart }: NavBarProps) => {
  const cartCount = useAppSelector((state) => state.cartReducer.length);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const filterProducts = useCallback(() => {
    // Your filterProducts logic here
  }, []);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);





  return (
    <div className="bg-gradient-to-r from-[#0a2e73] via-[#5078f0] to-[#a3caff] py-4 sticky top-0 z-10 shadow-lg border-t-4 border-yellow-400 shadow-yellow-950">
      <div className="container mx-auto px-4 flex justify-between items-center">
       
        <Link href="/" className="flex items-center">
          <Image
            src="/image/toysland-removebg-preview.png"
            alt="Toyshland Logo"
            width={48}
            height={48}
            className="h-8 w-auto sm:h-12"
          />
        </Link>

      
        <ul className="hidden md:flex gap-4 lg:gap-6 text-white font-medium text-sm lg:text-base">
          <li>
            <Link
              href="/"
              className='hover:text-yellow-400 transition-colors duration-200 relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Shop"
              className='hover:text-yellow-400 transition-colors duration-200 relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/Kids"
              className='hover:text-yellow-400 transition-colors duration-200 relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
            >
              Your Kids Age
            </Link>
          </li>
          <li>
            <Link
              href="/Category"
              className='hover:text-yellow-400 transition-colors duration-200 relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
            >
              Toys Category
            </Link>
          </li>
          <li>
            <Link
              href="/Activity"
              className='hover:text-yellow-400 transition-colors duration-200 relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
            >
              Activity
            </Link>
          </li>
          <li>
            <Link
              href="/Blog"
              className='hover:text-yellow-400 transition-colors duration-200 relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className='hover:text-yellow-400 transition-colors duration-200 relative after:content-[""] after:absolute after:w-full after:h-0.5 after:bg-yellow-400 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex gap-4 sm:gap-6 text-[20px] sm:text-[26px] items-center">
          
          <div className="relative cursor-pointer text-white hover:text-gray-200 transition-colors duration-300 p-1 sm:p-2 rounded-full bg-red-600">
            <FcSearch className="text-white" />
          </div>

        
          <div
            className="relative cursor-pointer text-white hover:text-gray-200 transition-colors duration-300 p-1 sm:p-2 rounded-full bg-red-600"
            onClick={() => setShowCart(true)}
          >
            <FaShopify />
            <div className="absolute top-[-8px] right-[-8px] sm:top-[-10px] sm:right-[-10px] bg-white w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] rounded-full text-black text-[10px] sm:text-[12px] grid place-items-center">
              {cartCount}
            </div>
          </div>
        </div>

        
        <RxHamburgerMenu
          className="md:hidden text-[26px] text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

     
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a2e73] text-white p-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/Shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link href="/Kids" onClick={() => setIsMobileMenuOpen(false)}>Your Kids Age</Link>
          <Link href="/Category" onClick={() => setIsMobileMenuOpen(false)}>Toys Category</Link>
          <Link href="/Activity" onClick={() => setIsMobileMenuOpen(false)}>Activity</Link>
          <Link href="/Blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          <Link href="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      
      <div className="text-white bg-red-600 px-4 py-1 overflow-hidden w-full">
        <span className="inline-block animate-news-headline text-sm sm:text-base">
        <span className="mx-4">🚂 Sales up  for 50 % off </span>
          <span className="mx-4">🧸 Cuddly Teddy Bears on Sale!</span>
          <span className="mx-4">🎨 Unleash Creativity with Art Supplies!</span>
          <span className="mx-4">🏎️ Race into Fun with Remote Control Cars!</span>
          <span className="mx-4">🧩 Challenge Your Mind with Puzzles!</span>
          
        </span>
      </div>

      <style jsx>{`
        @keyframes news-headline {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-news-headline {
          animation: news-headline 20s linear infinite;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
