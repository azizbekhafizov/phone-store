import React, { useContext } from "react";
import { FaSearch, FaSun, FaMoon, FaHeart, FaShoppingCart } from "react-icons/fa";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <header className="w-full bg-white dark:bg-black text-black dark:text-white shadow-md sticky top-0 z-50">
      <div className="h-[88px] container flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link to='/'>
        
                <div className="text-2xl font-bold tracking-wide">cyber</div>
        </Link>

        {/* Search */}
        <div className="flex items-center bg-gray-100 dark:bg-gray-800 gap-4 px-4 rounded-2xl shadow-inner">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none w-[352px] h-[46px] text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4 text-sm font-medium">
          <Link
            to="/"
            className=" transition duration-500 text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" transition duration-500 text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            className=" transition duration-500 text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className=" cursor-pointer transition duration-500 text-lg hover:text-red-500 dark:hover:text-red-400 ">
            <FaHeart />
          </button>

          {/* Cart */}
          <button className=" cursor-pointer transition duration-500 text-lg hover:text-green-600 dark:hover:text-green-400 ">
            <FaShoppingCart />
          </button>

          {/* Language */}
          <select className=" cursor-pointer bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-2 py-1 focus:outline-none text-sm">
            <option value="UZ">UZ</option>
            <option value="RU">RU</option>
            <option value="EN">EN</option>
          </select>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-xl p-1 rounded-full cursor-pointer"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}
