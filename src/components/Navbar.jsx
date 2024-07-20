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
    <nav className="bg-gray-800 shadow-md relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left section: Hamburger icon, Logo, company name, and search box */}
          <div className="flex items-center">
            {/* Hamburger menu button */}
            <div className="block md:hidden mr-2">
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
                    className="h-8 sm:h-10 w-10 bg-green-600 hover:bg-yellow-400 text-white rounded-r-md flex items-center justify-center"
                  >
                    <FaSearch />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right section: Cart icon and desktop navigation links */}
          <div className="flex items-center">
            <div className="hidden md:flex md:flex-row md:items-center md:gap-x-6">
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
            </div>

            {/* Cart icon always visible on both mobile and desktop */}
            <NavLink
              to="/cart"
              className="relative text-gray-300 hover:text-white transition-all duration-300 ease-in ml-4 md:ml-6"
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

        {/* Mobile sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-800 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h2 className="text-yellow-300 text-2xl">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
          <div className="mt-4">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className="block px-4 py-2 text-gray-300 hover:text-white transition duration-300 ease-in"
            >
              Home
            </NavLink>
            <NavLink
              to="/login"
              onClick={toggleMenu}
              className="block px-4 py-2 text-gray-300 hover:text-white transition duration-300 ease-in"
            >
              Login
            </NavLink>
            <NavLink
              to="/aboutus"
              onClick={toggleMenu}
              className="block px-4 py-2 text-gray-300 hover:text-white transition duration-300 ease-in"
            >
              About Us
            </NavLink>
            <NavLink
              to="/cart"
              onClick={toggleMenu}
              className="block px-4 py-2 text-gray-300 hover:text-white transition duration-300 ease-in"
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
      </div>
    </nav>
  );
};

export default Navbar;
