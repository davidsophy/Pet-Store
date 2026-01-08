import React from "react";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="w-full flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/image/logo.png"
            alt="Petzone Logo"
            className="h-24 w-32 object-contain drop-shadow-lg transition-transform duration-200 hover:scale-105"
          />
          <a href="/" className="text-2xl font-bold text-blue-600 ">
            PETZONE
          </a>
        </div>

        {/* Right side: search + user links */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for pets"
              aria-label="Search for pets"
              className="bg-gray-100 outline-none text-sm"
            />
          </div>

          {/* User Links */}
          <div className="flex items-center space-x-4 text-blue-600">
              <div >
                  <a className="text-base" href="@">Login</a><span className="text-black">/</span><a href="">register</a>
              </div>
            <a href="#"> <FaUser /></a>
            <a href="#"> <FaHeart /></a>
            <a href="#"> <FaShoppingCart /></a>
          </div>
        </div>
      </div>

      <nav className="w-full border-t border-gray-200 bg-white">
        <div className="w-full flex justify-center space-x-8 py-2 px-6 text-blue-600">
          <a href="/" className="hover:text-blue-800">
            Home
          </a>
          <div className="relative group">
            <button className="hover:text-blue-800 flex items-center space-x-1">
              Shop <span>▾</span>
            </button>
          </div>
          <div className="relative group">
            <button className="hover:text-blue-800 flex items-center space-x-1">
              Services <span>▾</span>
            </button>
          </div>
          <a href="/about" className="hover:text-blue-800">
            About Us
          </a>
          <a href="/contact" className="hover:text-blue-800">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
