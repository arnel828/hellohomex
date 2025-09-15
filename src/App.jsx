import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [clipPathApplied, setClipPathApplied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClipPathApplied(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {clipPathApplied && <Navbar showNavbar={clipPathApplied} />}
      <img
        src="/img/66eb4fe26bacf86c07f72402_cta img.avif"
        alt="CTA Image"
        className={`absolute top-0 left-0 w-full h-full object-cover z-50 transition-clip-path duration-1000 ease-out ${
          clipPathApplied ? 'clip-path-final' : 'clip-path-initial'
        }`}
      />
      <div className="max-w-[1140px] mx-auto mt-[100px]"> {/* Adjust mt value as needed based on actual Navbar height + 40px margin */}
        {/* Other content can go here */}
      </div>
    </div>
  );
}

export default App;
