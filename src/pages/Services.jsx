import React from 'react';
import { Clock } from 'lucide-react';

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex mt-15 flex-col md:flex-row justify-between items-center gap-4">
          <div className="bg-[#F9BC07] text-black px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm text-center">
            THE PERFECT PLACE TO WORK AND COLLABORATE
          </div>
          <button className="border-2 border-[#F9BC07] text-[#F9BC07] px-4 md:px-6 py-2 rounded-full font-semibold hover:bg-[#F9BC07] hover:text-black transition-all duration-300 text-sm md:text-base">
            VIEW ALL SERVICES
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 md:mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">
            OPEN <span className="text-[#F9BC07]">24</span> HOURS
          </h1>
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-700 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#F9BC07]" />
          </div>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-16">
          Best Co working Space in Lahore Facilities
        </p>

        {/* Image Gallery - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {/* Image 1 - Private Office */}
          <div className="relative group overflow-hidden rounded-2xl border-4 border-[#F9BC07] md:transform md:-translate-y-8">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop" 
                alt="Private Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                <h3 className="text-lg md:text-xl font-bold text-center">Private Offices</h3>
              </div>
            </div>
          </div>

          {/* Image 2 - Meeting Room */}
          <div className="relative group overflow-hidden rounded-2xl border-4 border-[#F9BC07] md:transform md:translate-y-8">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=800&fit=crop" 
                alt="Open Spaces"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                <h3 className="text-lg md:text-xl font-bold text-center">Meeting Room</h3>
              </div>
            </div>
          </div>

          {/* Image 3 - Flexible Rooms */}
          <div className="relative group overflow-hidden rounded-2xl border-4 border-[#F9BC07] md:transform md:-translate-y-8">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=800&fit=crop" 
                alt="Shared Space"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                <h3 className="text-lg md:text-xl font-bold text-center">Flexible Rooms</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}