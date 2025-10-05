import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent backdrop-blur-xl backdrop-brightness-70 text-white p-4 shadow-lg fixed w-full top-0 z-10">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-6">
        <div className="text-2xl font-semibold">
          <span className="text-white">Jewldy</span>
        </div>

        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="hover:text-gray-200 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#shop" className="hover:text-gray-200 transition duration-300">
              Shop
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-200 transition duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-200 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
