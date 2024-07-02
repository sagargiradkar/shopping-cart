import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
    setSearchQuery("");
  };

  const isHome = location.pathname === "/";

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and site title */}
          <div className="flex items-center">
            <NavLink to="/">
              <img src={logo} className="h-16 sm:h-20" alt="Logo" />
            </NavLink>
            <div className="ml-2 sm:ml-4 flex items-center">
              <div>
                <h1 className="text-yellow-300 font-bold text-lg sm:text-2xl">
                  Poshinda.co
                </h1>
                <p className="text-yellow-300 text-xs sm:text-sm">
                  The Pure Essence of Nature & Soil
                </p>
              </div>
              {/* Conditional Search Box */}
              {isHome && (
                <form
                  onSubmit={handleSearch}
                  className="hidden md:flex ml-4 items-center"
                >
                  <input
                    type="text"
                    placeholder="Search products"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-40 sm:w-60 h-8 sm:h-10 pl-4 pr-8 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                  className="h-8 sm:h-10  w-10 bg-green-600 hover:bg-yellow-400 text-white rounded-r-md flex items-center justify-center"
                  >
                    <FaSearch />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Hamburger menu button for mobile */}
          <div className="flex items-center">
            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isOpen ? (
                  <FaTimes className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
            </div>
            {/* Desktop navigation links */}
            <div className="hidden md:flex md:flex-row md:items-center md:gap-x-6 md:mr-6">
              <NavLink
                to="/"
                className="text-gray-300 hover:text-white transition-all duration-300 ease-in"
              >
                Home
              </NavLink>
              <NavLink
                to="/login"
                className="text-gray-300 hover:text-white transition-all duration-300 ease-in"
              >
                Login
              </NavLink>
              <NavLink
                to="/aboutus"
                className="text-gray-300 hover:text-white transition-all duration-300 ease-in"
              >
                About Us
              </NavLink>
              <NavLink
                to="/cart"
                className="relative text-gray-300 hover:text-white transition-all duration-300 ease-in"
              >
                <FaShoppingCart className="text-2xl" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-xs w-5 h-5 grid place-items-center animate-bounce text-white">
                    {cart.length}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile search box */}
        <form
          onSubmit={handleSearch}
          className="flex md:hidden mt-2 items-center"
        >
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow h-8 pl-4 pr-8 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            style={{ marginBottom: "5px", width: "150px" }}
          />
          <button
            type="submit"
            className="h-8 w-10 mb-1 bg-green-600 hover:bg-yellow-400 text-white border-gray-300 rounded-r-md flex items-center justify-center"
          >
            <FaSearch />
          </button>
        </form>

        {/* Mobile menu */}
        {isOpen && (
          <div className="block md:hidden">
            <div className="mt-2">
              <NavLink
                to="/"
                onClick={toggleMenu}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition duration-300 ease-in"
              >
                Home
              </NavLink>
              <NavLink
                to="/login"
                onClick={toggleMenu}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition duration-300 ease-in"
              >
                Login
              </NavLink>
              <NavLink
                to="/aboutus"
                onClick={toggleMenu}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition duration-300 ease-in"
              >
                About Us
              </NavLink>
              <NavLink
                to="/cart"
                onClick={toggleMenu}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition duration-300 ease-in"
              >
                Cart{" "}
                {cart.length > 0 && (
                  <span className="ml-1 bg-green-600 rounded-full text-xs px-2 py-1 text-white">
                    {cart.length}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
