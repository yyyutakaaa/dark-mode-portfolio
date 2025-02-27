import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 w-full bg-[#0D1117] bg-opacity-80 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo & initialen */}
        <div className="flex items-center space-x-2">
          <Logo />
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#hero"
              className="relative group transition-colors text-[#E0E0E0]"
            >
              Home
              {/* Subtiel lijntje bij hover */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF007A] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="relative group transition-colors text-[#E0E0E0]"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF007A] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="relative group transition-colors text-[#E0E0E0]"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF007A] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative group transition-colors text-[#E0E0E0]"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF007A] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        </ul>
        {/* Hamburger menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Open menu"
            className="text-2xl hover:text-[#FF007A]"
          >
            ☰
          </button>
        </div>
      </nav>
      {/* Mobiele navigatie */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center bg-[#0D1117] space-y-4 p-4"
        >
          <li>
            <a
              href="#hero"
              className="hover:text-[#FF007A]"
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-[#FF007A]"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#FF007A]"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#FF007A]"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </motion.ul>
      )}
    </header>
  );
};

export default Navbar;
