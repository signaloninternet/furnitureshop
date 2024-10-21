import React, { useState } from 'react';
import Navbar from './Navbar';
import image1 from '../assets/desktop-image-hero-1.jpg';
import image2 from '../assets/desktop-image-hero-2.jpg';
import image3 from '../assets/desktop-image-hero-3.jpg';

function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      image: image1, 
      title: "Discover innovative ways to decorate",
      description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
      image: image2, 
      title: "We are here to help you find the perfect home",
      description: "We strive to create a world where homes are as unique and beautiful as they are affordable. Our experts at HomeFinder have extensive knowledge of the industry, so you can find the home you're dreaming of."
    },
    {
      image: image3, 
      title: "Find the perfect home for your lifestyle",
      description: "HomeFinder has an extensive network of real estate agents and professionals who can help you find the perfect home for your needs. Our team of experts will guide you through the process, ensuring you find a home that fits your budget, style, and lifestyle."
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-screen h-screen flex flex-col sm:flex-row sm:h-[76vh]">
      <div className="absolute top-0 left-0 w-full sm:w-1/2">
        <Navbar />
      </div>

      <div className="left w-full h-1/2 sm:w-3/5 sm:h-full">
        <img
          src={data[currentSlide].image}
          alt="Slide Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="right relative w-full h-1/2 p-8 flex flex-col justify-center sm:w-2/5 sm:h-full">
        <h1 className="text-4xl font-serif font-bold mb-4">{data[currentSlide].title}</h1>
        <p className="text-gray-600 mb-6 font-light font-sans">{data[currentSlide].description}</p>
        <button className="text-sm font-bold tracking-wide uppercase pb-2 hover:text-gray-700 flex flex-row gap-8 items-center">
          <p className='tracking-[10px] font-mono'>Shop Now</p>
          <img src="src/assets/icon-arrow.svg" alt="Shop Now Arrow" />
        </button>
        <div className="flex sm:absolute sm:bottom-0 sm:left-0 space-x-4 mt-8 bg-black py-3 px-5 gap-3">
          <button onClick={handlePrev} className="text-2xl">
            <img src="src/assets/icon-angle-left.svg" alt="Previous" />
          </button>
          <button onClick={handleNext} className="text-2xl">
            <img src="src/assets/icon-angle-right.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
