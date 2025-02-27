import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4 text-center">
      <div className="flex justify-center space-x-4 mb-2">
        <a
          href="https://www.instagram.com/o.mehdi.k/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com/yyyutakaaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/mehdi-oulad-khlie-5a43aa30b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p>©2025 Mehdi Oulad Khlie</p>
    </footer>
  );
};

export default Footer;
