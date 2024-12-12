import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      className='flex justify-center items-center h-screen bg-gray-100'
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546193.jpg?t=st=1734016305~exp=1734019905~hmac=d314e8fc1c80ae0da9230e03e62664a3024652154c8d37955131cf6c2639538e&w=1380')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className='bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md m-3'>
        <h2 className='text-2xl font-bold mb-4'>Register</h2>
        <p className='mb-6 font-mono'>Create an account to start learning</p>
        <form className='space-y-4'>
          <input
            type='text'
            placeholder='Name'
            className='w-full border-gray-300 rounded-md p-3'
          />
          <input
            type='text'
            placeholder='Email'
            className='w-full border-gray-300 rounded-md p-3'
          />
          <input
            type='password'
            placeholder='Password'
            className='w-full border-gray-300 rounded-md p-3'
          />
          <div className='space-y-2'>
            <label className='block text-gray-700 font-medium'>
              Upload Profile Photo
            </label>
            <input
              type='file'
              accept='image/*'
              className='block w-full max-w-md text-gray-500 border-gray-300 rounded-md p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-md'
          >
            Register
          </button>
        </form>
        <div className='mt-6 text-center text-gray-500'>
          <p>
            Already have an account?{" "}
            <Link
              to='/login'
              className='text-blue-500 hover:underline focus:outline-none'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
