import React, { useState } from "react";

import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from "../context/ThemeSwitcher";
// import {HamburgerIcon} from '@heroicons/react/24/solid'

const NavBar = () => {
    const location = useLocation(); 
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path: string) => location.pathname === path;
    
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
      };

  return (
    <div className=" navbar flex flex-row items-center justify-between py-4  w-full">
      <div className="flex items-center">
        <h1 className="text-4xl font-bold mb-4">
          Mike<span className="text-primary">T.</span>
        </h1>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="btn btn-primary">
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      <div className={`flex-grow flex-col md:justify-center md:flex md:flex-row md:items-center ${isOpen ? 'flex' : 'hidden md:flex'}`}>
        <ul className="flex flex-col md:flex-row md:space-x-8">
          <li>
            <Link to="/"  className={`text-lg transition-all duration-200 ${isActive('/') ? 'font-semibold' : 'opacity-70'} hover:opacity-100`}
              onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={`text-lg transition-all duration-200 ${isActive('/about') ? 'font-semibold' : 'opacity-70'} hover:opacity-100`}>About</Link> 
          </li>
          <li>
            <Link to="/works" className={`text-lg transition-all duration-200 ${isActive('/works') ? 'font-semibold' : 'opacity-70'} hover:opacity-100`}>Works</Link>
          </li>
          <li>
            <Link to="/contact" className={`text-lg transition-all duration-200 ${isActive('/contact') ? 'font-semibold' : 'opacity-70'} hover:opacity-100`}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
      <button className="btn  bg-[#404040] text-white rounded-2xl px-8 mr-3 hover:text-black  text-lg font-semibold ">Let's Talk</button>

        <ThemeSwitcher /></div>
      
    </div>
  );
};

export default NavBar;
