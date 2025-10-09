import { useState } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Import Routes
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
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

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

        {/* Example separate routes if needed */}
        <Route path="/about" element={
          <>
         
       <AboutSection/>
       <AboutImages/>
       <TestimonialsCarousel/>
         
          </>
          } />
        <Route path="/contact" element={<CoworkingFAQ />} />
        <Route path="/pricing" element={<GulbergBanner />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
