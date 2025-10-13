import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function LocationSection() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Your Google Maps link for Wework Plaza, H3 Johar Town, Lahore
  const googleMapsUrl =
    "https://www.google.com/maps/place/Wework+Plaza+595,+H3,+Johar+Town,+Lahore,+Opposite+Emporium+Mall/";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 py-8 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-black">
          OUR LOCATION
        </h1>
      </div>

      {/* Centered Map Section */}
      <div className="flex justify-center items-center py-12 px-4">
        <div className="relative w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-[450px] rounded-2xl overflow-hidden border-4 border-yellow-500 shadow-2xl group">
          {!isMapLoaded && (
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
              <div className="text-center animate-pulse">
                <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <p className="text-gray-400">Loading map...</p>
              </div>
            </div>
          )}

          {/* Map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.176!2d74.2786!3d31.4695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190a4e33b3b20f%3A0x43b2c82a9b72f3b1!2sWework%20Plaza%20595%2C%20H3%20Johar%20Town%2C%20Lahore!5e0!3m2!1sen!2s!4v1731440000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setIsMapLoaded(true)}
            className="absolute inset-0"
          />

          {/* Clickable Overlay Button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:scale-105 z-20"
          >
            📍 View on Google Maps
          </a>
        </div>
      </div>

    </div>
  );
}
