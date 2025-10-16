import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for details.');
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Get in Touch */}
          <div className="bg-black border-2 border-[#F9BC07] rounded-lg overflow-hidden">
            <div className="bg-[#F9BC07] p-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-black">Get in touch</h2>
              <div className="flex items-center gap-2 mt-2">
                <Phone className="w-5 h-5 text-black" />
                <span className="text-black font-semibold">-----</span>
              </div>
            </div>
            
            <div className="p-6 sm:p-8">
              <p className="text-white text-base sm:text-lg mb-8">
                Feel free to contact me anytime for inquiries, collaborations, or assistance. We always available and happy to help!
              </p>

              <h3 className="text-white text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#F9BC07] p-2 rounded">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white text-lg">+92 321 4448958</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#F9BC07] p-2 rounded">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white text-lg break-all">inquiries@wework-cowork.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#F9BC07] p-2 rounded">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-white text-lg">
                     Wework Plaza 595, H3 Johar Town Lahore, Opposite Emporium Mall
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-white text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4 text-white">
                          <a
                            href="https://www.facebook.com/weworkcowork"
                            className="w-10 h-10 rounded-full border-2 border-[#F9BC07] flex items-center justify-center hover:bg-[#F9BC07] hover:text-black transition-all"
                            aria-label="Facebook"
                          >
                            <Facebook className="w-5 h-5" />
                          </a>
                          <a
                            href="https://www.instagram.com/weworkcowork/?igsh=YnU0dng0ZWJ4dncz#"
                            className="w-10 h-10 rounded-full border-2 border-[#F9BC07] flex items-center justify-center hover:bg-[#F9BC07] hover:text-black transition-all"
                            aria-label="Instagram"
                          >
                            <Instagram className="w-5 h-5" />
                          </a>
                               <a
                            href="https://www.youtube.com/@WeWork-CoWork"
                            className="w-10 h-10 rounded-full border-2 border-[#F9BC07] flex items-center justify-center hover:bg-[#F9BC07] hover:text-black transition-all"
                            aria-label="Instagram"
                          >
                            <Youtube className="w-5 h-5" />
                          </a>
                          <a
                            href="https://api.whatsapp.com/send/?phone=923214448958&text&type=phone_number&app_absent=0"
                            className="w-10 h-10 rounded-full border-2 border-[#F9BC07] flex items-center justify-center hover:bg-[#F9BC07] hover:text-black transition-all"
                            aria-label="Instagram"
                          >
                            <FaWhatsapp className="w-5 h-5" />
                          </a>
                           <a
                            href="mailto:inquiries@wework-cowork.com "
                            className="w-10 h-10 rounded-full border-2 border-[#F9BC07] flex items-center justify-center hover:bg-[#F9BC07] hover:text-black transition-all"
                            aria-label="Instagram"
                          >
                            <Mail className="w-5 h-5" />
                          </a>
                        </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-black border-2 border-[#F9BC07] rounded-lg overflow-hidden">
            <div className="bg-[#F9BC07] p-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-black">Contact Us</h2>
              <p className="text-black mt-1">Feel free to contact with us.</p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded focus:outline-none focus:border-[#F9BC07]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded focus:outline-none focus:border-[#F9BC07]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-400 text-sm mb-2">
                    Phone No / WhatsApp No
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded focus:outline-none focus:border-[#F9BC07]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded focus:outline-none focus:border-[#F9BC07]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                    Your message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded focus:outline-none focus:border-[#F9BC07] resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-transparent border-2 border-[#F9BC07] text-[#F9BC07] px-8 py-3 rounded font-semibold hover:bg-[#F9BC07] hover:text-black transition-colors"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}