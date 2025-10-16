import React, { useEffect, useRef, useState } from "react";

export default function ServicesOffer() {
  const services = [
    { number: "01", title: "Flexible Rooms" },
    { number: "02", title: "Private Office" },
    { number: "03", title: "Meeting Rooms" },
  
  ];



  const [visibleItems, setVisibleItems] = useState([]);
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
    <div className=" bg-black text-white px-6 py-12 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16 md:mb-24">
              <div>

            <h1 className="text-4xl text-[#F9BC07] md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
             We Offer You
           
            </h1>
          </div>
   
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold group-hover:text-[#F9BC07] transition-colors duration-300 flex items-center">
                {service.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
