import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className=" ml-10 flex items-center">
            <NavLink to="/">
              <img src={logo} className="h-20" alt="Logo" />
            </NavLink>
            <div className="ml-4">
              <h1 className="text-yellow-300 font-bold text-10xl sm:text-2xl">Poshinda.co</h1>
              <p className="text-yellow-300 text-sm sm:text-sm">The Pure Essence of Nature & Soil</p>
            </div>
          </div>

          {/* Hamburger menu button for mobile */}
          <div className="flex items-center">
            <div className="block sm:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
            {/* Desktop navigation links */}
            <div className="hidden sm:flex sm:flex-row sm:items-center sm:gap-x-6 sm:mr-6">
              <NavLink to="/" className="text-gray-300 hover:text-white transition-all duration-300 ease-in">
                Home
              </NavLink>
              <NavLink to="/login" className="text-gray-300 hover:text-white transition-all duration-300 ease-in">
                Login
              </NavLink>
              <NavLink to="/aboutus" className="text-gray-300 hover:text-white transition-all duration-300 ease-in">
                About Us
              </NavLink>
              <NavLink to="/cart" className="relative text-gray-300 hover:text-white transition-all duration-300 ease-in">
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

        {/* Mobile menu */}
        {isOpen && (
          <div className="block sm:hidden">
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
                Cart {cart.length > 0 && <span className="ml-1 bg-green-600 rounded-full text-xs px-2 py-1 text-white">{cart.length}</span>}
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
