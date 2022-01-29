import "./App.css";
import React, { useEffect } from "react";
import Header from "./Layout/Header/Header.jsx";
import Footer from "./Layout/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
