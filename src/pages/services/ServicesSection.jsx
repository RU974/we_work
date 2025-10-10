import React, { useState, useEffect } from 'react';
import { TrendingUp, User } from 'lucide-react';

export default function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const carouselImages = [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
  ];

  const targetAudience = [
    "Entrepreneurs",
    "Freelancers",
    "Startups",
    "Professionals"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % targetAudience.length);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <>
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0 h-230 overflow-hidden">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-5000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: isAnimating && index === currentSlide ? "scale(1.05)" : ""
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-15 text-center mb-16">
          <span className="text-white ">
            Co Working Space in <br /> Johar Town Lahore <br /> Designed for
          </span>
          <br />
          <span className="text-yellow-500 inline-block min-h-20 relative">
            {targetAudience.map((text, index) => (
              <span
                key={index}
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
                  index === currentTextIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
              >
                {text}
              </span>
            ))}
          </span>
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-6 md:gap-12 justify-center mb-20 md:mb-32">
          <button className="flex flex-col items-center gap-3 text-white hover:text-yellow-500 transition-colors group">
            <div className="bg-white/10 p-4 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
              <TrendingUp size={40} className="stroke-2" />
            </div>
            <span className="text-base md:text-lg font-semibold">TALK TO SALES</span>
          </button>

          <button className="flex flex-col items-center gap-3 text-white hover:text-yellow-500 transition-colors group">
            <div className="bg-white/10 p-4 rounded-lg group-hover:bg-yellow-400/20 transition-colors">
              <User size={40} className="stroke-2" />
            </div>
            <span className="text-base md:text-lg font-semibold">BOOK A TOUR</span>
          </button>
        </div>
      </div>
    </>
  );
}