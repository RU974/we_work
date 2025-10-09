import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      text: "We Work provides an excellent coworking environment in Gulberg, Lahore. High-speed internet, modern infrastructure, and a collaborative atmosphere make it ideal for startups, freelancers, and professionals seeking productivity and networking opportunities.",
      name: "Ali Raza",
      title: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      id: 2,
      text: "As a freelancer, finding the right workspace is crucial. We Workoffers reliable WiFi, comfortable seating, and a motivating environment. Prime location in Lahore makes it a perfect place to work. Easy accessible to attractions on MM Alam Road.",
      name: "Sarah Khan",
      title: "Digital Marketer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      id: 3,
      text: "We Work stands out with its spacious, well-designed workstations, supportive staff, and peaceful ambiance. It's a fantastic coworking space for entrepreneurs and businesses looking for an inspiring place to boost productivity and innovation in Lahore.",
      name: "Usman Javed",
      title: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className=" bg-black text-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-yellow-500 mb-2 tracking-wide">Our Reviews</p>
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">What Our Clients Says</h1>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    {/* Show only current testimonial on mobile, all three on desktop */}
                    <div className="md:col-span-3 grid md:grid-cols-3 gap-4 md:gap-6">
                      {testimonials.map((item, idx) => (
                        <div
                          key={item.id}
                          className={`${
                            idx === currentSlide ? 'block' : 'hidden md:block'
                          }`}
                        >
                          <div>
                            <div className="border border-yellow-400 rounded-2xl p-6 sm:p-8 h-full flex flex-col relative bg-black hover:border-yellow-300 transition-colors mb-6">
                              {/* Quote Mark */}
                              
                              
                              {/* Testimonial Text */}
                              <p className="text-white leading-relaxed text-sm sm:text-base relative z-10">
                                {item.text}
                              </p>
                            </div>

                            {/* Author Info - Outside Border */}
                            <div className="flex items-center gap-4">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-700"
                              />
                              <div>
                                <h3 className="font-semibold text-base sm:text-lg">{item.name}</h3>
                                <p className="text-gray-400 text-sm">{item.title}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-8 bg-yellow-400' 
                    : 'w-2 bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}