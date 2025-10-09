import React from 'react';
import { Facebook, Instagram, Youtube,Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/logo.png"
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center ">

              <img
                src={Logo}
                alt="Logo"
                className="h-10 w-auto"
              />


              <div>
                <h3 className="text-xl font-bold tracking-wider">WeWork</h3>
                <p className="text-xs text-gray-400 tracking-widest">COWORKING</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We Work is a modern coworking space designed to inspire creativity and
              collaboration. With its sleek interiors, state-of-the-art facilities, and
              vibrant community.
            </p>
          </div>

          {/* Pages Section */}
          <div>
            <h4 className="text-yellow-500 font-semibold text-lg mb-4">Pages</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h4 className="text-yellow-500 font-semibold text-lg mb-4">Subscribe</h4>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              To get a free & amazing offers and other cool things stay with us.
              Please subscribe us.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-900 border border-gray-700 rounded text-sm focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <button
                className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition-colors text-sm"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Contact Information Section */}
          <div>
            <h4 className="text-yellow-500 font-semibold text-lg mb-4">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                <div className="text-sm">

                  <a href="tel:+92 321 4448958" className="text-gray-300 hover:text-yellow-500 transition-colors block">
                    +92 321 4448958
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                <a href="inquiries@wework-cowork.com" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm break-all">
                  inquiries@wework-cowork.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Wework Plaza 595,<br />
                  H3 Johar Town Lahore, <br />
                  Opposite Emporium Mall
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            WeWork All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/weworkcowork"
              className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/weworkcowork/?igsh=YnU0dng0ZWJ4dncz#"
              className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
                 <a
              href="https://www.youtube.com/@WeWork-CoWork"
              className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
              aria-label="Instagram"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=923214448958&text&type=phone_number&app_absent=0"
              className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
              aria-label="Instagram"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
             <a
              href="mailto:inquiries@wework-cowork.com "
              className="w-10 h-10 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
              aria-label="Instagram"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}