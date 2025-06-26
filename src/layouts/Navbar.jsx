import React, { useContext } from 'react';
import { FaSearch, FaSun, FaMoon } from 'react-icons/fa';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
   <header className="w-full flex items-center justify-between p-4 shadow-md sticky top-0 z-50  text-black dark:bg-black dark:text-white">


      <div className="text-2xl font-bold tracking-wide">cyber</div>

      <nav className="flex space-x-4 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
        <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
      </nav>

      <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 w-1/3 shadow-inner">
        <FaSearch className="text-gray-500" />
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-transparent outline-none px-2 w-full text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-300" 
        />
      </div>

      <div className="flex items-center space-x-4">
        <select 
          className="bg-transparent border border-gray-300 dark:border-gray-600 rounded px-2 py-1 focus:outline-none text-sm"
        >
          <option value="UZ">UZ</option>
          <option value="RU">RU</option>
          <option value="EN">EN</option>
        </select>

        <button 
          onClick={toggleDarkMode} 
          className="text-xl p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}
