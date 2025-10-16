import React from 'react';

export default function ServicesBanner() {
  return (
    <div className="h-100 bg-black flex items-center justify-center overflow-hidden py-8">
      <div className="relative w-full">
        {/* Main scrolling text */}
        <div className="overflow-hidden">
          <h1 className="animate-scroll-slow whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
            <span className="inline-block px-4 text-[#F9BC07]" style={{ 
              WebkitTextStroke: '2px #F9BC07', 
              WebkitTextFillColor: 'transparent',
              paintOrder: 'stroke fill' 
            }}>
              High Speed Internet_
            </span>
            <span className="inline-block px-4 text-[#F9BC07]" style={{ 
              WebkitTextStroke: '2px #F9BC07', 
              WebkitTextFillColor: 'transparent',
              paintOrder: 'stroke fill' 
            }}>
              Backups_
            </span>
            <span className="inline-block px-4 text-[#F9BC07]" style={{ 
              WebkitTextStroke: '2px #F9BC07', 
              WebkitTextFillColor: 'transparent',
              paintOrder: 'stroke fill' 
            }}>
              Parking_
            </span>
            <span className="inline-block px-4 text-[#F9BC07]" style={{ 
              WebkitTextStroke: '2px #F9BC07', 
              WebkitTextFillColor: 'transparent',
              paintOrder: 'stroke fill' 
            }}>
              24 Hours Access_
            </span>
            <span className="inline-block px-4 text-[#F9BC07]" style={{ 
              WebkitTextStroke: '2px #F9BC07', 
              WebkitTextFillColor: 'transparent',
              paintOrder: 'stroke fill' 
            }}>
              Tea & Coffee_
            </span>
          </h1>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollSlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-slow {
          animation: scrollSlow 30s linear infinite;
          display: inline-block;
        }

        .animate-scroll-slow::after {
          content: attr(data-text);
        }
      `}</style>
    </div>
  );
}