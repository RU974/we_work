import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-auto" // ✅ Tailwind uses h-12 not h-15
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 font-roboto text-white font-bold text-lg">
          <Link to="/" className="hover:text-yellow-500 transition-colors duration-300">Home Page</Link>
          <Link to="/about" className="hover:text-yellow-500 transition-colors duration-300">About Us</Link>
          <Link to="/services" className="hover:text-yellow-500 transition-colors duration-300">Services</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition-colors duration-300">Contact Us</Link>
          <Link to="/pricing" className="hover:text-yellow-500 transition-colors duration-300">Pricing</Link>
        </div>

        {/* Right Side (Buttons + Mobile Toggle) */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden lg:block border-4 border-yellow-400 text-white px-6 py-2 rounded-full hover:border-white hover:text-yellow-500 transition-all duration-300 font-semibold"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-yellow-500"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-6 bg-black/70 backdrop-blur-md rounded-lg p-6 space-y-4">
          <Link to="/" className="block text-white hover:text-yellow-500 transition-colors duration-300">Home Page</Link>
          <Link to="/about" className="block text-white hover:text-yellow-500 transition-colors duration-300">About Us</Link>
          <Link to="/services" className="block text-white hover:text-yellow-500 transition-colors duration-300">Services</Link>
          <Link to="/contact" className="block text-white hover:text-yellow-500 transition-colors duration-300">Contact Us</Link>
          <Link to="/pricing" className="block text-white hover:text-yellow-500 transition-colors duration-300">Pricing</Link>
          <Link
            to="/contact"
            className="block w-full text-center border-4 border-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
