import React, { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';
import CountUp from 'react-countup';
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import Slide3 from "../../assets/slide3.jpg";
import Slide4 from "../../assets/slide4.jpg";

import Slide5 from "../../assets/slide5.jpg";
import Slide6 from "../../assets/slide6.jpg";
import Slide7 from "../../assets/slide7.jpg";
import Slide8 from "../../assets/slide8.jpg";

import Slide9 from "../../assets/slide9.jpg";
import Slide10 from "../../assets/slide10.jpg";
import Slide11 from "../../assets/slide11.jpg";
import Slide12 from "../../assets/slide12.jpg";

export default function Space99Landing() {
  const [offset, setOffset] = useState(0);
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev + 1);
    }, 50);

    // Stats observer
    const currentStatsRef = statsRef.current;
    let statsObserver;
    
    if (currentStatsRef) {
      statsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleStats(true);
          }
        },
        { threshold: 0.2 }
      );
      statsObserver.observe(currentStatsRef);
    }

    return () => {
      clearInterval(interval);
      if (statsObserver && currentStatsRef) {
        statsObserver.disconnect();
      }
    };
  }, []);

  // Image columns with placeholder images
  const column1Images = [
    Slide1,
   Slide2,
    Slide3,
    Slide4
  ];

  const column2Images = [
    Slide5,
    Slide6,
    Slide7,
    Slide8
  ];

  const column3Images = [
    Slide9,
    Slide10,
    Slide10,
    Slide11
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

  const stats = [
    { number: 4, label: ["YEARS OF", "EXPERIENCE"] },
    { number: 25, label: ["ROOMS"], suffix: "+" },
    { number: 24, label: ["SERVICE", "AVAILABLE"], suffix: "h" },
  ];

  return (
    <div className="min-h-screen mt-50 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-20">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center space-y-8 lg:pr-8">
            <div>
              <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">Who we are</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9BC07] mb-6 leading-tight">
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
                    <Check className="w-5 h-5 text-[#F9BC07] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {amenities.slice(4, 8).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#F9BC07] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Days */}
            <div className="pt-4">
              <h3 className="text-xl md:text-2xl font-semibold">
                Operational days : <span className="text-[#F9BC07]">Mon – Sat</span>
              </h3>
            </div>
          </div>

          {/* Right Image Gallery Section */}
          <div className="hidden lg:grid grid-cols-3 gap-10 h-[600px] overflow-hidden">
            {/* Column 1 - Moves Up */}
            <div 
              className="flex flex-col gap-4"
              style={{ transform: `translateY(-${offset % 500}px)` }}
            >
              {[...column1Images, ...column1Images].map((img, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden flex-shrink-0 h-58">
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
                <div key={idx} className="relative rounded-lg overflow-hidden flex-shrink-0 h-58">
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
                <div key={idx} className="relative rounded-lg overflow-hidden flex-shrink-0 h-58">
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

        {/* Stats Section */}
        <div ref={statsRef} className="mt-10 md:mt-20 pt-12 pb-12 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:items-center gap-4 transition-all duration-700 ${
                  visibleStats
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent"
                  style={{
                    WebkitTextStroke: "2px #ffffff",
                    textStroke: "2px #ffffff",
                  }}
                >
                  {visibleStats ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2}
                      suffix={stat.suffix || ""}
                    />
                  ) : (
                    0
                  )}
                </div>
                <div className="text-sm md:text-base font-bold leading-tight text-center md:text-left">
                  {stat.label.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}