import React from 'react'
import image1 from '../assets/image-about-dark.jpg'
import image2 from '../assets/image-about-light.jpg'
const Bottom = () => {
  return (
    <div className="bottom-section sm:flex w-full">
  <div className="left-image w-full sm:w-1/3">
    <img
      src={image1}
      alt="About Furniture"
      className="object-cover w-full h-full"
    />
  </div>

  <div className="text-section bg-white p-8 sm:w-1/3 flex flex-col justify-center">
    <h2 className="text-lg font-bold uppercase tracking-wider text-gray-800">
      About our furniture
    </h2>
    <p className="text-sm text-gray-600 mt-4 font-light leading-relaxed">
      Our multifunctional collection blends design and function to suit your individual taste. 
      Make each room unique, or pick a cohesive theme that best expresses your interests and what 
      inspires you. Find the furniture pieces you need, from traditional to contemporary styles or 
      anything in between. Product specialists are available to help you create your dream space.
    </p>
  </div>

  <div className="right-image w-full sm:w-1/3">
    <img
      src={image2}
      alt="Furniture Style"
      className="object-cover w-full h-full"
    />
  </div>
</div>

  )
}

export default Bottom