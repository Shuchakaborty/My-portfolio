import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import web from "../assets/web.png";

function About() {
  return (
    <>
      <div className="bg-white py-16 px-6 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-start justify-between">
          {/* Left Side - About Me Text */}
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h2 className="text-yellow-500 text-xl font-semibold mb-4">About Me</h2>
            <h3 className="text-yellow-500 text-3xl font-bold mb-4">
              Hello! I'm <span className="text-yellow-500">Shubhajit Chakraborty.</span> I'm a Professional Web Developer &{' '}
              <span className="text-yellow-500">Freelancer.</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur ut lorem vitae ultricies. Integer porta, libero sit amet pretium lobortis, tortor mauris eleifend urna, ut laoreet velit nisi scelerisque ex. Fusce vel pulvinar ligula. Etiam eget dolor leo. Phasellus eu dolor cursus, sodales nunc at, tempor turpis.
            </p>
            <p className="text-gray-400 mb-6">
              Morbi ac ante neque. In porttitor imperdiet blandit. Aliquam laoreet rutrum mattis. Pellentesque id ligula et purus tincidunt tempus a nec purus.
            </p>
            <div className="flex items-center mb-8">
              <span className="text-yellow-500 text-lg font-semibold mr-4">Follow Me:</span>
              {/* Social Icons */}
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-700 text-white p-2 rounded-full">
                  <FaFacebook />
                </a>
                <a href="#" className="bg-black text-white p-2 rounded-full">
                  <FaSquareXTwitter />
                </a>
                <a href="#" className="bg-black text-white p-2 rounded-full">
                  <FaGithub />
                </a>
                <a href="#" className="bg-blue-700 text-white p-2 rounded-full">
                  <FaLinkedin />
                </a>
                <a href="#" className="bg-pink-900 text-white p-2 rounded-full">
                  <FaInstagram />
                </a>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
                My Work
              </button>
              <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
                Download CV
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              alt="ecommerce"
              className="w-full h-64 md:h-auto md:w-auto object-cover object-center rounded"
              src={web}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
