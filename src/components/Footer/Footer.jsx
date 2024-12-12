import React from "react";

const Footer = () => {
  return (
    <footer className='bg-blue-600 text-white py-8'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between'>
        <div className='mb-4 md:mb-0'>
          <h4 className='font-bold mb-4'>Quick Links</h4>
          <ul className='space-y-2'>
            <li>
              <a href='/about' className='hover:text-gray-300'>
                About Us
              </a>
            </li>
            <li>
              <a href='/courses' className='hover:text-gray-300'>
                Courses
              </a>
            </li>
            <li>
              <a href='/teacher' className='hover:text-gray-300'>
                Teacher
              </a>
            </li>
            <li>
              <a href='/pricing' className='hover:text-gray-300'>
                Pricing
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:text-gray-300'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='mb-4 md:mb-0'>
          <h4 className='font-bold mb-4'>Useful Links</h4>
          <ul className='space-y-2'>
            <li>
              <a href='/privacy-policy' className='hover:text-gray-300'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/terms-and-conditions' className='hover:text-gray-300'>
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href='/disclaimer' className='hover:text-gray-300'>
                Disclaimer
              </a>
            </li>
            <li>
              <a href='/support' className='hover:text-gray-300'>
                Support
              </a>
            </li>
            <li>
              <a href='/faq' className='hover:text-gray-300'>
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className='mb-4 md:mb-0'>
          <h4 className='font-bold mb-4'>Stay Connected</h4>
          <div className='flex space-x-4'>
            <input
              type='email'
              placeholder='Your Email Address'
              className='bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white'
            />
            <button className='bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200'>
              Send
            </button>
          </div>
          <div className='mt-4'>
            <p>Jl. Sunset Road No.815, Kuta</p>
            <p>support@domain.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
