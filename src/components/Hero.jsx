import React, { useState, useEffect } from 'react';

const Hero = ({ clipPathApplied }) => {
  const textLines = [
    "accelerate climate solutions",
    "build and execute your strategy",
    "navigate carbon markets",
    "effectively deploy capital"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textLines.length);
        setIsAnimating(false);
      }, 500); // Half of the animation duration
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [textLines.length]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4 pt-20 h-[100vh]"> {/* Adjusted min-h and added pt-20 */}
      <div className="relative flex items-center justify-center mb-20 gap-[50px]">
        <h1 className="text-[68px] font-light text-black leading-tight">Rebalance</h1>
        <div className="relative w-[200px] h-[200px] mx-8 flex items-center justify-center"> {/* Increased size for rotating image */}
          <img src="/img/66eae22e9496687fc2f910cb_cta circle text.svg" alt="Talk to our climate experts" className="animate-spin-slow absolute inset-0 w-[200px] h-[200px] object-cover rounded-full z-20" />
       <img
        src="/img/66eb4fe26bacf86c07f72402_cta img.avif"
        alt="CTA Image"
        className={`absolute inset-0 m-auto w-full h-full object-cover z-10 transition-clip-path duration-1000 ease-out ${
          clipPathApplied ? 'clip-path-final' : 'clip-path-initial'
        }`}
      />
        </div>
        <h1 className="text-[70px] font-light text-black leading-tight">the planet</h1>
      </div>
      <p className="text-[40px] text-black mb-4">Patch helps you</p>
      <div className="border border-gray-300 rounded-full py-2 px-6 mb-8 h-[50px] overflow-hidden relative w-auto">
        <span
          key={currentIndex}
          className={`text-[36px] px-[5px] text-black inline-block ${isAnimating ? 'animate-slide-out' : 'animate-slide-in'}`}
        >{textLines[currentIndex]}</span>
      </div>
      <a href="#" className="text-black flex items-center text-lg mt-[30px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-play-circle mr-2" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
          <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5V5.5a.5.5 0 0 1 .271-.445"/>
        </svg>
        Watch the Patch Platform video
      </a>
    </section>
  );
};

export default Hero;
