import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function CoreServices() {
  const services = [
    { number: "01", title: "High Speed Internet" },
    { number: "02", title: "Electricity with Backup" },
    { number: "03", title: "Tea & Coffee" },
    { number: "04", title: "Front Desk Services" },
    { number: "05", title: "Mail Handling" },
    { number: "06", title: "Access to Common Areas" },
    { number: "07", title: "Meeting & Printing Quotas" },
    { number: "08", title: "Parking" },
  ];

  const stats = [
    { number: 4, label: ["YEARS OF", "EXPERIENCE"] },
    { number: 15, label: ["ROOMS"], suffix: "+" },
    { number: 24, label: ["SERVICE", "AVAILABLE"], suffix: "h" },
  ];

  const [visibleItems, setVisibleItems] = useState([]);
  const [visibleStats, setVisibleStats] = useState(false);
  const itemRefs = useRef([]);
  const statsRef = useRef(null);

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              }, index * 100);
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    // Stats observer
    if (statsRef.current) {
      const statsObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleStats(true);
          }
        },
        { threshold: 0.2 }
      );
      statsObserver.observe(statsRef.current);
      observers.push(statsObserver);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 md:mb-24">
          <div>
            <p className="text-yellow-500 text-sm md:text-base mb-4 font-medium">
              Core Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Our mission is to make
              <br />
              your work life smooth
              <br />
              and easy
            </h1>
          </div>
          <button className="mt-8 md:mt-0 border-2 border-dashed border-yellow-400 text-yellow-500 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium">
            VIEW ALL SERVICES
          </button>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
          {services.map((service, index) => (
            <div
              key={service.number}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`flex items-center gap-16 md:gap-24 lg:gap-32 group transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <span
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent transition-all duration-500 flex-shrink-0"
                style={{
                  WebkitTextStroke: "2px #facc15",
                  textStroke: "2px #facc15",
                }}
              >
                {service.number}/
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold group-hover:text-yellow-500 transition-colors duration-300 flex items-center">
                {service.title}
              </h2>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="mt-24 md:mt-32 pt-16 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 lg:gap-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-start md:items-center gap-4 transition-all duration-700 delay-${index * 100} ${
                  visibleStats
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
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
                <div className="text-sm md:text-base font-bold leading-tight">
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
