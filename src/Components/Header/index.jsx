/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

// menu + logo + login + carrito
const Header = () => {
    return (
      <header className="sticky top-0 z-50 bg-white w-fit">
        <nav className="flex justify-between p-4 w-dvw  ">
          <img
            src="menu.svg"
            alt="menu"
            className="flex md:hidden justify-center"
          />
          <Link to="/" className="cursor-pointer">
            <img src="logo.svg" alt="logo" />
          </Link>
          <section className="flex w-fit justify-center align-center">
            <Link
              to="/login"
              className="place-self-center text-green-600 no-underline cursor-pointer"
            >
              Login
            </Link>
            <img
              src="cart.svg"
              alt="cart"
              className=" flex w-[44px] cursor-pointer self-center "
            />
          </section>
        </nav>
      </header>
    );
}

export default Header
