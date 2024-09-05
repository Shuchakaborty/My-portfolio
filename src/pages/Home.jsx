import React from 'react';
import pic from '../assets/passport.jpg';

function Home() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          {/* Left Side - Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <p className="text-yellow-400 text-lg font-semibold mb-2">Hello!</p>
            <h1 className="text-yellow-400 text-4xl md:text-5xl font-bold mb-4">
              I'm a Full-Stack Web Developer
            </h1>
            <p className="text-gray-400 mb-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
                Hire Me
              </button>
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
                Download CV
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={pic}
              alt="Profile"
              className="rounded-full shadow-lg w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
