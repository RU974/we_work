import React from 'react';

export default function GulburgBanner() {
  return (
    <div className="h-100 bg-black flex items-center justify-center overflow-hidden py-8">
      <div className="relative w-full">
        {/* Yellow tape with scrolling text */}
        <div className="relative overflow-hidden bg-yellow-400 transform -rotate-3 shadow-2xl">
          <div className="animate-scroll whitespace-nowrap py-2 md:py-3">
            <span className="inline-block px-8 text-xs md:text-sm lg:text-base font-bold text-black tracking-wider">
              LOCATED IN THE HEART OF JOHAR TOWN •  LOCATED IN THE HEART OF JOHAR TOWN •  LOCATED IN THE HEART OF JOHAR TOWN •  LOCATED IN THE HEART OF JOHAR TOWN •  LOCATED IN THE HEART OF JOHARTOWN •  LOCATED IN THE HEART OF JOHAR TOWN •  LOCATED IN THE HEART OF JOHAR TOWN •    LOCATED IN THE HEART OF JOHAR TOWN
            </span>
          </div>
        </div>

        {/* Main content with hollow outlined text */}
        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="overflow-hidden">
            <h1 className="animate-scroll-slow whitespace-nowrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
              <span className="inline-block px-4 text-yellow-400" style={{ 
                WebkitTextStroke: '2px #facc15', 
                WebkitTextFillColor: 'transparent',
                paintOrder: 'stroke fill' 
              }}>
                High Speed Internet_
              </span>
              <span className="inline-block px-4 text-yellow-400" style={{ 
                WebkitTextStroke: '2px #facc15', 
                WebkitTextFillColor: 'transparent',
                paintOrder: 'stroke fill' 
              }}>
                Backups_
              </span>
              <span className="inline-block px-4 text-yellow-400" style={{ 
                WebkitTextStroke: '2px #facc15', 
                WebkitTextFillColor: 'transparent',
                paintOrder: 'stroke fill' 
              }}>
                Parking_
              </span>
              <span className="inline-block px-4 text-yellow-400" style={{ 
                WebkitTextStroke: '2px #facc15', 
                WebkitTextFillColor: 'transparent',
                paintOrder: 'stroke fill' 
              }}>
                24 Hours Access_
              </span>
              <span className="inline-block px-4 text-yellow-400" style={{ 
                WebkitTextStroke: '2px #facc15', 
                WebkitTextFillColor: 'transparent',
                paintOrder: 'stroke fill' 
              }}>
                Tea & Coffee_
              </span>
            </h1>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollSlow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll-slow {
          animation: scrollSlow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}