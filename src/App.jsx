import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Splash from "./components/Splash";
import Services from "./pages/Services";
import CoworkingServices from "./pages/CoworkingServices";
import GulbergBanner from "./pages/GulbergBanner";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Splash onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Dashboard />
          <Services/>
          <CoworkingServices/>
          <GulbergBanner/>
        </>
      )}
    </>
  );
}

export default App;
