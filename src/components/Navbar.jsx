import logo from "../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-10 flex items-center">
          <img src={logo} className="h-20" alt="Logo" />
          <div className="ml-4">
            <h1 className="text-yellow-300 font-bold text-4xl">Poshinda.co</h1>
            <div className="text-yellow-300 text-sm">The Pure Essence of Nature & Soil</div>
          </div>
        </div>
      </NavLink>
      <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
        <NavLink to="/">
          <p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">
            Home
          </p>
        </NavLink>
        <NavLink to="/login">
          <p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">
            Login
          </p>
        </NavLink>
        <NavLink to="/aboutus">
          <p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">
            About Us
          </p>
        </NavLink>
        <NavLink to="/cart">

          <div className="relative">
            <FaShoppingCart className="text-2xl " />
            {
              cart.length > 0 &&
              <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce text-white">{cart.length}</span>
            }
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
