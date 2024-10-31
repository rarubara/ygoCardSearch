/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Hlogin = () => {
  let navigate = useNavigate();
  return (
    <header className="sticky z-100 top-0 bg-white dark:bg-gray-900">
      <nav className="flex justify-between p-4 mx-4">
        <button
          className=" text-green-600 text-3xl  w-200px block md:hidden"
          onClick={() => navigate(-1)}
        >
          &lt; Atras
        </button>
        <Link to="/" className="cursor-pointer">
          <img src="logo.svg" alt="logo" />
        </Link>
        <section className="flex gap-4 justify-center align-center">
          <img src="cart.svg" alt="cart" className="w-44px cursor-pointer" />
        </section>
      </nav>
    </header>
  );
};

export default Hlogin;
