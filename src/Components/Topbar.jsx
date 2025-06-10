import React from 'react';
import { FaInfoCircle, FaUsers, FaImage } from 'react-icons/fa';
import '/src/index.css'

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function Topbar() {
  return (
    <nav className="w-full h-14 flex items-center justify-between px-8 bg-neutral-900/90 border-b border-blue-700 fixed top-0 left-0 right-0 z-50" style={{borderBottomWidth: '2px'}}>
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-2">
        <img
          src="/src/Components/Assets/img/forscom-logo.png"
          alt="Logo"
          className="h-8"
        />
        <span className="text-white font-bold text-xl tracking-wide">FORSCOM</span>
        <button onClick={() => scrollToSection('hero')} className="absolute inset-0 w-40 h-full bg-transparent cursor-pointer z-10" aria-label="Scroll to hero"/>
      </div>

      {/* Right: Navigation Links */}
      <div className="flex items-center space-x-8 text-white text-sm">
        <button onClick={() => scrollToSection('about')} className="flex items-center space-x-1 hover:text-blue-700 transition-colors bg-transparent border-none outline-none cursor-pointer">
          <FaInfoCircle />
          <span>About</span>
        </button>
        <button onClick={() => scrollToSection('units')} className="flex items-center space-x-1 hover:text-blue-700 transition-colors bg-transparent border-none outline-none cursor-pointer">
          <FaUsers />
          <span>Units</span>
        </button>
        <button onClick={() => scrollToSection('propaganda')} className="flex items-center space-x-1 hover:text-blue-700 transition-colors bg-transparent border-none outline-none cursor-pointer">
          <FaImage />
          <span>Propaganda</span>
        </button>
      </div>
    </nav>
  );
}

export default Topbar;