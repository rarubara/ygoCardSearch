/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from "../../Context/UserContexto";

const Header = () => {
    const { user, login, logout } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleLogout = () => {
        logout();
    };

    return (
      <header className="sticky top-0 z-50 bg-white w-full shadow-md dark:bg-gray-900">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Logo and Menu Icon */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 md:hidden dark:text-gray-200 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <img
                  src="menu.svg"
                  alt="menu"
                  className="h-6 w-6"
                />
              </button>
              <Link to="/" className="ml-4 md:ml-0">
                <img src="logo.svg" alt="logo" className="h-8 sm:h-10" />
              </Link>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/reservation"
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors dark:text-gray-200 dark:hover:text-green-400"
              >
                Reservar Mesa
              </Link>
            </div>

            {/* Right side - Auth and Cart */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {user ? (
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <span className="hidden sm:block text-sm sm:text-base text-green-600 font-medium dark:text-green-400">
                    {user.nombre}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                  >
                    Salir
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base font-medium rounded-lg text-green-600 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors dark:text-green-400 dark:hover:text-green-300"
                >
                  Login
                </Link>
              )}
              <div className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <img
                  src="cart.svg"
                  alt="cart"
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/reservation"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-green-400 dark:hover:bg-gray-700"
              >
                Reservar Mesa
              </Link>
              {user && (
                <span className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200">
                  {user.nombre}
                </span>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header
