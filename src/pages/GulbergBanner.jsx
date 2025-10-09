import React from 'react';

export default function GulburgBanner() {
  return (
    <div className="h-100 bg-black flex items-center justify-center overflow-hidden ">
      <div className="relative w-full ">
        {/* Yellow tape with scrolling text */}
        <div className="relative overflow-hidden bg-yellow-400 transform -rotate-3 shadow-2xl">
          <div className="animate-scroll whitespace-nowrap py-2 md:py-3">
            <span className="inline-block px-8 text-xs md:text-sm lg:text-base font-bold text-black tracking-wider">
              LOCATED IN THE HEART OF JOHARTOWN LOCATED IN THE HEART OF JOHARTOWN LOCATED IN THE HEART OF JOHARTOWN LOCATED IN THE HEART OF JOHARTOWN LOCATED IN THE HEART OF JOHARTOWN
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="overflow-hidden">
            <h1 className="animate-scroll-slow whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-yellow-500 tracking-tight">
              <span className="inline-block px-4" style={{ WebkitTextStroke: '2px #000', textStroke: '2px #000', paintOrder: 'stroke fill' }}>
                High Speed Internet_
              </span>
              <span className="inline-block px-4" style={{ WebkitTextStroke: '2px #000', textStroke: '2px #000', paintOrder: 'stroke fill' }}>
                Backups_ 
              </span>
              <span className="inline-block px-4" style={{ WebkitTextStroke: '2px #000', textStroke: '2px #000', paintOrder: 'stroke fill' }}>
                Parking_  
              </span>
               <span className="inline-block px-4" style={{ WebkitTextStroke: '2px #000', textStroke: '2px #000', paintOrder: 'stroke fill' }}>
                24 Hours Access_ 
              </span>
               <span className="inline-block px-4" style={{ WebkitTextStroke: '2px #000', textStroke: '2px #000', paintOrder: 'stroke fill' }}>
                Tea & Coffee
              </span>
            </h1>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scrollSlow {
          0% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scrollReverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll-slow {
          animation: scrollSlow 25s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scrollReverse 22s linear infinite;
        }
      `}</style>
    </div>
  );
}