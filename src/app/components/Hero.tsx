"use client"

import React from 'react'

const Hero = () => {
    return (
      <div className='container relative pt-16 bg-white'>
        <video
          src={"/image/toys2.mp4"}
          width={1400}
          height={100}
          autoPlay
          loop
          muted
          className='w-full h-auto object-cover opacity-80'
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-black bg-opacity-10 backdrop-filter backdrop-blur-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 
          p-4 sm:p-6 md:p-8 lg:p-10
          space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6 rounded-lg shadow-xl 
          animate-fade-in-up transition-all duration-500 ease-in-out hover:scale-105 animate-pulse'>
          <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight animate-slide-in-left bg-gradient-to-r from-[#0a2e73] via-[#5078f0] to-[#a3caff] text-transparent bg-clip-text'>Discover Magic in Every Toy</h2>
          <p className='text-white text-xs sm:text-sm md:text-base lg:text-lg animate-slide-in-right'>Unleash imagination and joy with our curated collection of enchanting toys.</p>

         <a href="/Shop" className='block w-full sm:inline-block sm:w-auto'> 
          <button className='bg-blue-900 text-white text-xs sm:text-sm md:text-base lg:text-lg
            py-2 sm:py-3 md:py-3 lg:py-4 px-4 sm:px-6 md:px-8
            rounded-full hover:from-blue-500 hover:to-green-400 transition-all duration-300 w-full sm:w-auto animate-pulse shadow-md hover:shadow-lg'>
            Explore Wonderland
          </button>

         </a>
        </div>
      </div>
    )
}

export default Hero
