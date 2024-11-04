/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from "../../Context/UserContexto";

const Header = () => {
    const { user, login, logout } = useUser();
    return (
      <header className="sticky top-0 z-50 bg-white w-full shadow-md dark:bg-gray-900">
        <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <img
              src="menu.svg"
              alt="menu"
              className="h-8 w-8 md:hidden cursor-pointer hover:opacity-80 transition-opacity"
            />
            <Link to="/" className="cursor-pointer">
              <img src="logo.svg" alt="logo" className="h-12" />
            </Link>
          </div>
          <section className="flex items-center gap-6">
            {user ? (
              <Link
                to="/login"
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                {user.nombre}
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                Login
              </Link>
            )}
            <img
              src="cart.svg"
              alt="cart"
              className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </section>
        </nav>
      </header>
    );
}

export default Header
