import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Splash from "./components/Splash";
import Services from "./pages/Services";

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
        </>
      )}
    </>
  );
}

export default App;
