import React from "react";
import photo from "../../assets/bg.png";
import bgImage from "../../assets/background.gif"; // Add your background image here

const HeroSection = () => {
  return (
    <div className='py-20 bg-cover bg-center'>
      <div className='bg-opacity-90 py-10'>
        <div className='container mx-auto px-4 flex flex-col-reverse md:flex-row items-center'>
          {/* Text Content */}
          <div className='w-full md:w-1/2 md:pr-8 text-center md:text-left'>
            <h1 className='text-5xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 via-purple-500 to-red-700 text-transparent bg-clip-text'>
              Master Japanese Vocabulary
            </h1>
            <p className='text-gray-700 mb-3 mt-4 font-mono'>
              Embark on your journey to fluency with our interactive Japanese
              vocabulary learning platform. From beginner to advanced levels, we
              offer engaging lessons, practice exercises, and cultural insights
              to enhance your language skills.
            </p>
            <div className='flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4'>
              <button className='bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700'>
                Start Learning
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className='w-full md:w-1/2 mb-6 md:mb-0'>
            <img
              src={photo}
              alt='Japanese Learning'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
