import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

export default function Space99Landing() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Image columns with placeholder images
  const column1Images = [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop'
  ];

  const column2Images = [
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop'
  ];

  const column3Images = [
    'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop'
  ];

  const amenities = [
    { text: 'High speed internet', col: 1 },
    { text: 'Electricity with backup', col: 1 },
    { text: 'Unlimited tea and Coffee', col: 1 },
    { text: 'Front desk services', col: 1 },
    { text: 'Mail handling', col: 2 },
    { text: 'Access to common areas', col: 2 },
    { text: 'Meeting and printing quotas', col: 2 },
    { text: 'Parking', col: 2 }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-20">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center space-y-8 lg:pr-8">
            <div>
              <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">Who we are</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 leading-tight">
                Welcome to We Work
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                We Work is a modern coworking space designed to inspire creativity and collaboration. 
                With its sleek interiors, state-of-the-art facilities, and vibrant community.
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                {amenities.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {amenities.slice(4, 8).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Days */}
            <div className="pt-4">
              <h3 className="text-xl md:text-2xl font-semibold">
                Operational days : <span className="text-yellow-400">Mon – Sat</span>
              </h3>
            </div>
          </div>

          {/* Right Image Gallery Section */}
          <div className="hidden lg:grid grid-cols-3 gap-4 h-[600px] overflow-hidden">
            {/* Column 1 - Moves Up */}
            <div 
              className="flex flex-col gap-4"
              style={{ transform: `translateY(-${offset % 500}px)` }}
            >
              {[...column1Images, ...column1Images].map((img, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden flex-shrink-0 h-48">
                  <img 
                    src={img} 
                    alt={`Space 99 interior ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Column 2 - Moves Down */}
            <div 
              className="flex flex-col gap-4"
              style={{ transform: `translateY(${offset % 500}px)` }}
            >
              {[...column2Images, ...column2Images].map((img, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden flex-shrink-0 h-48">
                  <img 
                    src={img} 
                    alt={`Space 99 workspace ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Column 3 - Moves Up */}
            <div 
              className="flex flex-col gap-4"
              style={{ transform: `translateY(-${offset % 500}px)` }}
            >
              {[...column3Images, ...column3Images].map((img, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden flex-shrink-0 h-48">
                  <img 
                    src={img} 
                    alt={`Space 99 meeting room ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Image Grid */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            {column1Images.slice(0, 4).map((img, idx) => (
              <div key={idx} className="relative rounded-lg overflow-hidden h-40">
                <img 
                  src={img} 
                  alt={`Space 99 ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}