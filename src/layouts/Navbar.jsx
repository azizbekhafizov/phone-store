import React from "react";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
import { useStorage } from "../contexts/StorageContext";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { setSearchTerm } = useSearch();
  const { wishlist, cart } = useStorage();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="w-full shadow-md bg-white text-black">
      <div className="h-[88px] container mx-auto flex items-center justify-between px-4">
        <Link to="/">
          <div className="text-2xl font-bold tracking-wide text-black">
            cyber
          </div>
        </Link>

        <div className="flex items-center border border-gray-300 gap-4 px-4 py-1 rounded-2xl bg-white">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder={t("search") || "Search"}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none w-[300px] h-[40px] placeholder-gray-500 text-black"
          />
        </div>
        {/* Nav links */}
        <nav className="flex space-x-6 text-base font-medium">
          <Link to="/" className="hover:text-blue-600">
            {t("home")}
          </Link>
          <Link to="/shop" className="hover:text-blue-600">
            {t("shop")}
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/wishlist" className="relative">
            <FaHeart className="text-xl" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

          <select
            className="cursor-pointer bg-white text-black border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
            value={i18n.language}
            onChange={handleLanguageChange}
          >
            <option value="en">EN</option>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
          </select>
        </div>
      </div>
    </header>
  );
}
