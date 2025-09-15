import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
      <div className="max-w-[1140px] mx-auto">
        {clipPathApplied && <Hero clipPathApplied={clipPathApplied} />}
      </div>
    </div>
  );
}

export default App;
