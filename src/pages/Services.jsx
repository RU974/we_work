import React from 'react';
import { Clock} from 'lucide-react';

export default function Services() {
  return (
    <div className=" bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-sm md:text-base">
          THE PERFECT PLACE TO WORK AND COLLABORATE
        </div>
        <button className="border-2 border-yellow-400 text-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300">
          VIEW ALL SERVICES
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <h1 className="text-6xl md:text-8xl font-bold">
            OPEN <span className="text-yellow-400">24</span> HOURS
          </h1>
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
            <Clock className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-16">
          Best Co working Space in Lahore Facilities
        </p>

        {/* Image Gallery - Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-36 mb-16 items-end">
          {/* Image 1 - Private Office (Up) */}
          <div className="relative group overflow-hidden rounded-2xl border-4 border-yellow-400 md:mb-16">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop" 
                alt="Private Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                <h3 className="text-xl font-bold text-center">Private Office</h3>
              </div>
            </div>
          </div>

          {/* Image 2 - Open Spaces (Down) */}
          <div className="relative group overflow-hidden rounded-2xl border-4 border-yellow-400 md:mt-16">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-700 to-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=800&fit=crop" 
                alt="Open Spaces"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                <h3 className="text-xl font-bold text-center">Open Spaces</h3>
              </div>
            </div>
          </div>

          {/* Image 3 - Shared Space (Down) */}
          <div className="relative group overflow-hidden rounded-2xl border-4 border-yellow-400 md:mt-16">
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-gray-900">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=800&fit=crop" 
                alt="Shared Space"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                <h3 className="text-xl font-bold text-center">Shared Space</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}