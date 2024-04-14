import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-gray-800 text-gray-400 h-[100px] max-w-full  flex justify-between gap-10 items-center">
      <Link to={'/'} className='text-3xl font-bold primary-color text-white ml-4 flex items-center'>
        Arjun gehlot
      </Link>
      <ul className='hidden md:flex p-10 gap-5 text-xl'>
        <li className='hover:text-white'><a href='/'>Home</a></li>
        <li className='hover:text-white'><a href='/about'>About</a></li>
        <li className='hover:text-white'><a href='/work'>Work</a></li>
        <li className='hover:text-white'><a href='/projects'>Projects</a></li>
        <li className='hover:text-white'><a href='/experience'>Achievement</a></li>
        <li className='hover:text-white'><a href='/contact'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
