import React, { useState } from "react";
import { Menu, Sun, Moon, X } from "lucide-react";

export default function Navbar({ darkMode, toggleDarkMode, isNavbarVisible }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
   <div className="min-h-screen bg-gray-50 text-gray-900">
      <div style={gradientStyle} />
      <nav
        className={`bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg fixed w-full z-10 shadow-lg transition-transform duration-300 ease-in-out ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                VVS
              </span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a
                href="#home"
                className="text-gray-900 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-900 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-900 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-cyan-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
            <div className="sm:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                About
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Contact
              </a>
            </div>
          </div>
        )}
          </nav>
          </div>
  );
}