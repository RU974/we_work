import React, { useEffect, useRef, useState } from 'react';
import { Clock, Wifi, Coffee, Users, Printer, Zap, Armchair, Lock, ParkingCircle, Network } from 'lucide-react';

export default function CoworkingServices() {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleItems((prev) => [...new Set([...prev, index])]);
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
          }
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const services = [
    {
      icon: <Clock className="w-12 h-12 mb-4" />,
      title: "Open 24 Hours",
      description: "We know that deadlines don't wait and neither should you! That's why our co-working space is open 24/7 so you can work on your own schedule without any restrictions."
    },
    {
      icon: <Wifi className="w-12 h-12 mb-4" />,
      title: "High Speed WiFi",
      description: "Enjoy high speed internet connection with our dedicated network so that you don't have to worry about speed while working on projects."
    },
    {
      icon: <Coffee className="w-12 h-12 mb-4" />,
      title: "Tea & Coffee",
      description: "At Space99 Co-working, we offer unlimited tea and coffee because we understand how important it is to keep yourself energized."
    },
    {
      icon: <Users className="w-12 h-12 mb-4" />,
      title: "Fully staffed reception",
      description: "At Space99 Co-working, we offer a fully staffed reception 24 hours a day, always ready to help you with whatever you need."
    },
    {
      icon: <Printer className="w-12 h-12 mb-4" />,
      title: "Printing & Scanning",
      description: "At Space99 Co-working, we offer printing and scanning services to make it easier for you and your team to work."
    },
    {
      icon: <Zap className="w-12 h-12 mb-4" />,
      title: "Power Backup",
      description: "With three backup systems (solar, UPS and generator) Space99 Co-working ensures no interruption in services and 24 hours open facility."
    },
    {
      icon: <Network className="w-12 h-12 mb-4" />,
      title: "Flexible Desk",
      description: "We understand how important networking is for freelancers and our flexible desk offers just that, a chance to sit anywhere and connect with anyone."
    },
    {
      icon: <Armchair className="w-12 h-12 mb-4" />,
      title: "Dedicated Desk",
      description: "At Space99 Co-working, we offer dedicated space with the best quality furniture to keep you productive all day."
    },
    {
      icon: <ParkingCircle className="w-12 h-12 mb-4" />,
      title: "Parking Space",
      description: "With giving you the best experience as our priority, we offer free valet parking with dedicated parking so you don't have to waste time."
    },
    {
      icon: <Lock className="w-12 h-12 mb-4" />,
      title: "Lockers",
      description: "At Space99 Co-working, we provide personal lockers to keep your precious belongings safe and secure."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Heading */}
          <div className="lg:col-span-1">
            <p className="text-yellow-400 text-sm font-semibold mb-4 uppercase tracking-wider">
              Core Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:sticky lg:top-8">
              Giving Your Business A Place To Innovate
            </h1>
          </div>

          {/* Right Column - All Services Grid */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                  className={`space-y-3 transition-all duration-700 ${
                    visibleItems.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${(index % 2) * 100}ms`
                  }}
                >
                  <div className={`text-yellow-400 transition-transform duration-500 ${
                    visibleItems.includes(index) ? 'scale-100' : 'scale-75'
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}