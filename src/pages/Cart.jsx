import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Footer from "./Footer";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <>
      <div className="mb-10">
        {cart.length > 0 ? (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-center gap-x-5">
              {/* Cart Item */}
              <div className="w-full md:w-2/3 flex flex-col p-2">
                {cart.map((cartItem, index) => (
                  <CartItem item={cartItem} key={cartItem.id} itemIndex={index} />
                ))}
              </div>

              {/* Summary */}
              <div className="w-full md:w-1/3 mt-5 flex flex-col">
                <div className="flex flex-col gap-5 p-5 my-14">
                  <div className="font-semibold text-xl text-green-800">
                    Your Cart
                  </div>
                  <div className="font-semibold text-4xl text-green-700">
                    Summary
                  </div>
                  <p className="text-xl">
                    <span className="text-gray-700 font-semibold text-xl">
                      Total Items: {cart.length}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xl font-bold">
                    <span className="text-gray-700 font-semibold">
                      Total Amount:
                    </span>{" "}
                    ${amount}
                  </p>
                  <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl w-full">
                    Check Out Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-[80vh] flex flex-col justify-center items-center">
            <img src="/empty-cart.svg" alt="Empty Cart" className="w-48 h-48 mb-4" />
            <h1 className="text-gray-700 font-semibold text-xl mb-2">
              Your cart is empty!
            </h1>
            <NavLink to="/">
              <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">
                Shop Now
              </button>
            </NavLink>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
