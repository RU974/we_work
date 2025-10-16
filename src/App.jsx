import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; 
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Splash from "./components/Splash";
import Services from "./pages/Services";
import CoworkingServices from "./pages/CoworkingServices";
import GulbergBanner from "./pages/GulbergBanner";
import CoreServices from "./pages/CoreServices";
import TestimonialsCarousel from "./pages/TestimonialsCarousel";
import CoworkingFAQ from "./pages/CoworkingFAQ";
import AboutSection from "./pages/about/AboutSection";
import AboutImages from "./pages/about/AboutImages";
import ServicesSection from "./pages/services/ServicesSection";
import ServicesOffer from "./pages/services/ServicesOffer";
import ServicesBanner from "./pages/services/ServicesBanner";
import ContactUsSection from "./pages/contact/ContactUsSection";
import ContactSection from "./pages/contact/contactSection";
import LocationSection from "./pages/contact/LocationSection";
import PriceSection from "./pages/price/PriceSection";
import PricingList from "./pages/price/PricingList";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // ✅ detect route change

  useEffect(() => {
    // Show splash screen whenever route changes
    setLoading(true);
  }, [location]);

  if (loading) {
    return <Splash onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page (Dashboard + all sections) */}
        <Route
          path="/"
          element={
            <>
              <Dashboard />
              <Services />
              <CoworkingServices />
              <GulbergBanner />
              <CoreServices />
              <TestimonialsCarousel />
              <CoworkingFAQ />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={
          <>
            <AboutSection/>
            <AboutImages/>
            <TestimonialsCarousel/>
          </>
        } />

        {/* Services Page */}
        <Route path="/services" element={
          <>
            <ServicesSection />
            <ServicesOffer/>
            <ServicesBanner/>
            <CoworkingServices />
            <CoworkingFAQ />
          </>
        } />

        {/* contact Page */}
        <Route path="/contact" element={
          <>
          <ContactUsSection />
          <ContactSection/>
          <LocationSection/>
          </>
          } />


        {/* Pricing Page */}
        <Route path="/price" element={
          <>
          <PriceSection />
          <PricingList/>

          </>
          } />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
