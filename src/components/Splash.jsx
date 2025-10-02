import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";

export default function Splash({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          onFinish(); // hide splash after 100%
          return 100;
        }
        return old + 2; // increase 2% per tick
      });
    }, 10);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(251,191,36,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(251,191,36,0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${
                Math.random() * 2
              }s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo */}
        <div className="relative mb-8 flex justify-center items-end opacity-0 animate-[logoEntrance_1.4s_cubic-bezier(0.34,1.56,0.64,1)_0.2s_forwards]">
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-yellow-500/10 shadow-2xl">
            <img
              src={Logo}
              alt="WeWork"
              className="w-52 h-52 object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent border-t-yellow-500/50 border-r-yellow-500/30 animate-[spin_3s_linear_infinite]" />
          </div>
        </div>

        {/* Title */}
        <div className="mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.4s_forwards]">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-transparent bg-clip-text mb-2 tracking-tight">
            WeWork
          </h1>
          <p className="text-slate-400 text-sm tracking-widest uppercase font-medium">
            Workspace Reimagined
          </p>
        </div>

        {/* Loading Section */}
        <div className="space-y-6 opacity-0 animate-[fadeIn_0.6s_ease-out_2s_forwards]">
          {/* Animated Dots */}
          <div className="flex justify-center items-center gap-2">
            {[0, 0.15, 0.3].map((delay, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"
                style={{
                  animation: `smoothBounce 1.4s ease-in-out ${delay}s infinite`,
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-80 max-w-full mx-auto">
            <div className="h-1.5 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-700/50 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 rounded-full transition-all duration-300 ease-out relative shadow-lg shadow-yellow-500/30"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]" />
              </div>
            </div>
            <p className="text-yellow-500/70 text-xs mt-3 font-medium tracking-wide">
              {progress}%
            </p>
          </div>

          <p className="text-slate-500 text-xs tracking-wider animate-pulse">
            Preparing your workspace...
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes logoEntrance {
          0% {
            transform: translateY(-80px) scale(0.5) rotate(-10deg);
            opacity: 0;
            filter: blur(10px);
          }
          60% {
            transform: translateY(8px) scale(1.08) rotate(2deg);
          }
          100% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 1;
            filter: blur(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        @keyframes smoothBounce {
          0%, 60%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          30% {
            transform: translateY(-12px) scale(1.1);
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
