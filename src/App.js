import "./App.css";
import React, { useEffect } from "react";
import Header from "./Layout/Header/Header.jsx";
import Footer from "./Layout/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Token from "./Pages/Token/Token.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Token" element={<Token />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
