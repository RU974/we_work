import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-15 w-auto"
            />
          </div>
        </div>


        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 font-roboto text-white font-bold text-lg">
          <a href="#home" className="text-white hover:text-yellow-400 transition-colors duration-300">Home Page</a>
          <a href="#about" className="text-white hover:text-yellow-400 transition-colors duration-300">About Us</a>
          <a href="#services" className="text-white hover:text-yellow-400 transition-colors duration-300">Services</a>
          <a href="#contact" className="text-white hover:text-yellow-400 transition-colors duration-300">Contact Us</a>
          <a href="#pricing" className="text-white hover:text-yellow-400 transition-colors duration-300">Pricing</a>
        </div>


        <div className="flex items-center gap-4">
          <button className="hidden lg:block border-yellow-400 text-white border-4 px-6 py-2 rounded-full hover:border-white hover:text-yellow-400 transition-all duration-300 font-semibold">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-yellow-400"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-6 bg-black/50 backdrop-blur-md rounded-lg p-6 space-y-4">
          <a href="#home" className="block text-white hover:text-yellow-400 transition-colors duration-300">Home Page</a>
          <a href="#about" className="block text-white hover:text-yellow-400 transition-colors duration-300">About Us</a>
          <a href="#services" className="block text-white hover:text-yellow-400 transition-colors duration-300">Services</a>
          <a href="#contact" className="block text-white hover:text-yellow-400 transition-colors duration-300">Contact Us</a>
          <a href="#pricing" className="block text-white hover:text-yellow-400 transition-colors duration-300">Pricing</a>
          <button className="w-full text-white border-4 border-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold">
            Contact Us
          </button>
        </div>
      )}
    </nav>

  );
}
