// import React from "react";

// export default function Navbar() {
//   return (
//     <header className="py-6">
//       <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
//         <a href="/" className="text-xl font-bold">Olamide Wahab</a>
//         <nav className="hidden md:flex gap-6 items-center text-sm">
//           <a href="#projects" className="hover:text-purple-600">Projects</a>
//           <a href="#about" className="hover:text-purple-600">About</a>
//           <a href="#contact" className="hover:text-purple-600">Contact</a>
//         </nav>
//         <div className="md:hidden">
//           {/* mobile menu placeholder */}
//         </div>
//       </div>
//     </header>
//   );
// }
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="py-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo / Name */}
        <a href="/" className="text-xl font-bold text-gray-800">
          Olamide Wahab
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
          <a href="#projects" className="hover:text-purple-600 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-purple-600 transition">
            About
          </a>
          <a href="#contact" className="hover:text-purple-600 transition">
            Contact
          </a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 py-6 text-sm font-medium text-gray-700">
            <a
              href="#projects"
              onClick={toggleMenu}
              className="hover:text-purple-600 transition"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="hover:text-purple-600 transition"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="hover:text-purple-600 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
