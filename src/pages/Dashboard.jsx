import React, { useState, useEffect } from "react";
import { Phone, User} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import img1 from "../assets/img1.jpg"

export default function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const carouselImages = [
   img1 ,
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=80"
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.contact) {
      alert("Booking request submitted! We will contact you soon.");
      setFormData({ name: "", email: "", contact: "", message: "" });
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <>
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-5000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 "
                : "opacity-0 "
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

   
    <div className="relative z-10 container mx-auto px-8 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl pt-8">
       <div className="mb-6 text-gray-300">
  <p className="text-2xl font-roboto text-white font-bold ">
    Welcome to 
    <span className="text-yellow-500"> We Work</span>
  </p>
  <p className="text-xl mt-2 font-roboto text-white font-bold">
    Co Working Space Johar Town Lahore
  </p>
</div>


          <h1 className="text-5xl text-white md:text-7xl lg:text-8xl font-bold mb-10 leading-tight">
            Your <span className="text-yellow-500">Gateway</span>
            <br />
            to Productivity!
          </h1>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => window.open("https://wa.me/923214448958", "_blank")}
              className="flex items-center gap-2 border-2 border-yellow-400 text-yellow-500 px-8 py-3 rounded hover:bg-yellow-500 hover:text-black transition-all font-semibold"
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </button>
            <button className="flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition-all font-semibold">
              <User size={20} />
              Book A Tour
            </button>
          </div>
        </div>

        {/* Booking Form */}
        <div className="w-full lg:w-96 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl lg:sticky lg:top-24">
          <div className="bg-black text-center py-4 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-white">Book Now</h3>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-black text-white py-4 rounded-lg font-bold hover:bg-gray-900 transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 left-8 z-20">
        <button className="bg-yellow-500 text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
          <Phone size={24} />
        </button>
      </div>

      <div className="fixed bottom-8 right-8 z-20">
        <button
          onClick={() => window.open("https://wa.me/923214448958", "_blank")}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={28} />
        </button>
      </div>
    </div>
    </>
  );
}