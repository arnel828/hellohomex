import React from 'react';

const Navbar = ({ showNavbar }) => {
  return (
    <nav className={`bg-white mt-[40px] z-40 fixed top-0 left-1/2 -translate-x-1/2 max-w-[1140px] w-full mt-10 transition-opacity duration-500 ${showNavbar ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full mx-auto flex justify-between items-center px-[20px] py-[2px] my-8 border border-gray-300 rounded-[10px] shadow-sm">
        <div className="flex items-center">
          <img src="/img/67a3aa96c2bd17fa14da2a3e_Logo.svg" alt="Patch Logo" className="h-8 mr-2" />
        </div>
        <ul className="flex space-x-6 list-none p-0 m-0 flex gap-[10px]">
          <li className="relative group">
            <a href="#" className="text-black hover:text-gray-900 flex items-center no-underline">Carbon credits</a>
          </li>
          <li className="relative group">
            <a href="#" className="!text-black hover:text-gray-900 flex items-center no-underline ">How to rebalance the planet</a>
          </li>
          <li className="relative group">
            <a href="#" className="!text-black hover:text-gray-900 flex items-center no-underline">Resources </a>
          </li>
          <li className="relative group">
            <a href="#" className="!text-black hover:text-gray-900 flex items-center no-underline">Company </a>
          </li>
        </ul>
        <div className="flex items-center">
          <a href="#" className="!text-black hover:text-gray-900 flex items-center mr-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person mr-1" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
            Log in
          </a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md flex items-center">
            Get started <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;