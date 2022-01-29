import React from "react";
import "./Home.css";
import Hero from "./Hero/Hero.jsx";
import Video from "./Video/Video.jsx";
import Collect from "./Collect/Collect.jsx";
import Collect2 from "./Collect2/Collect2.jsx";
import QR from "./QR/QR.jsx";
import Find from "./Find/Find.jsx";
import Slider from "./Slider/Slider.jsx";
import Status from "./Status/Status.jsx";
function Home() {
  return (
    <div className="home">
      <Hero />
      <Video />
      <div className="shape-wrapper">
        <Collect />
        <Collect2 />
        <div className="bg-triangle-2">
          <Slider />
          <Status />
        </div>
        <div className="bg-triangle">
          <Find />
          <QR />
        </div>
      </div>
    </div>
  );
}

export default Home;
