import './Navbar.css'

import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold"><a href="#hero" >SD</a></h1>
          <div>
            <a href="#projects" className="mr-6 hover:underline">Projects</a>
            <a href="#experience" className="mr-6 hover:underline">Experience</a>
            <a href="#skills" className="mr-6 hover:underline">Skills</a>
            <a href="#education" className="mr-6 hover:underline">Education</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
