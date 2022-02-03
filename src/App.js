import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Layout/Header/Header.jsx";
import Footer from "./Layout/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import Token from "./Pages/Token/Token.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [dark, setDark] = useState(false);
  const darkMode = (value) => {
    return setDark(value);
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    AOS.refreshHard();
  }, []);
  return (
    <div className="App">
      <Router>
        <Header darkSet={darkMode} />
        <Routes>
          <Route exact path="/" element={<Home dark={dark} />}></Route>
          <Route path="/Token" element={<Token dark={dark} />}></Route>
        </Routes>
      </Router>
      <Footer dark={dark} />
    </div>
  );
}

export default App;
