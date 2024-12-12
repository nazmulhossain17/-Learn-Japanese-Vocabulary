import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-slate-50 shadow-md'>
      <div className='container mx-auto px-4 py-5 flex justify-between items-center'>
        {/* Logo */}
        <a
          href='/'
          className='font-bold text-xl bg-gradient-to-r from-orange-600 via-purple-600 to-red-600 text-transparent bg-clip-text'
        >
          日本~ Learn Japanese
        </a>

        {/* Hamburger Icon for Mobile */}
        <button
          className='block md:hidden text-gray-700 focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6'>
          <li>
            <a href='/' className='text-gray-700 hover:text-blue-600'>
              Home
            </a>
          </li>
          <li>
            <a href='/about' className='text-gray-700 hover:text-blue-600'>
              Lessons
            </a>
          </li>
          <li>
            <a href='/courses' className='text-gray-700 hover:text-blue-600'>
              Tutorials
            </a>
          </li>
          <li>
            <a href='/contact' className='text-gray-700 hover:text-blue-600'>
              Contact
            </a>
          </li>
          <li>
            <a
              href='/login'
              className='bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md font-bold'
            >
              Login
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden bg-gray-100 px-4 pt-4 pb-2 space-y-2'>
          <li>
            <a href='/' className='block text-gray-700 hover:text-blue-600'>
              Home
            </a>
          </li>
          <li>
            <a
              href='/about'
              className='block text-gray-700 hover:text-blue-600'
            >
              Lessons
            </a>
          </li>
          <li>
            <a
              href='/courses'
              className='block text-gray-700 hover:text-blue-600'
            >
              Tutorials
            </a>
          </li>
          <li>
            <a
              href='/contact'
              className='block text-gray-700 hover:text-blue-600'
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href='/login'
              className='block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md font-bold text-center'
            >
              Login
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
