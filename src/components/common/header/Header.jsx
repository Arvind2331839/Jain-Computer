import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import the Link component
import Head from './Head';

const Header = () => {
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items with their respective paths
  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'Courses', link: '/courses' },
    { id: 3, text: 'Team', link: '/team' },
    { id: 4, text: 'About', link: '/about' },
    { id: 5, text: 'Pricing', link: '/pricing' },
    { id: 6, text: 'Journal', link: '/journal' },
    { id: 7, text: 'Contact', link: '/contact' },
  ];

  return (
    <>
    <Head/>
    
    <div className='bg-black bg-opacity-50 flex justify-between items-center h-24 max-w-[1340px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'></h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {/* Use Link to navigate to the related path */}
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>JCI</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {/* Use Link to navigate to the related path */}
            <Link to={item.link} onClick={handleNav}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Header;
