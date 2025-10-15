import React, { useState, useEffect } from 'react';
import { TrendingUp, User } from 'lucide-react';

export default function ContactUsSection() {
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



  return (
    <>
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0 h-[80vh] md:h-[110vh] lg:h-[115vh] overflow-hidden">
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
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-[90vh] md:h-[90vh] lg:h-[100vh] px-8">
        {/* Main Heading */}
          <h2 className='text-5xl text-white flex justify-center'>Contact Us</h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mt-15 text-center mb-16">
        
          <span className="text-white ">
            Book Your WORKSPACE<br /> <span className='text-yellow-500'>NOW! </span> 
          </span>
          <br />
        </h1>


      </div>
    </>
  );
}