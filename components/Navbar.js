import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 w-full bg-[#0D1117] bg-opacity-80 backdrop-blur-md z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-[#00D4FF]">Mehdi Oulad Khlie</div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-[#FF007A]">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#FF007A]">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#FF007A]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#FF007A]">
              Contact
            </a>
          </li>
        </ul>
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
              Projecten
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#FF007A]"
              onClick={toggleMenu}
            >
              Over
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
