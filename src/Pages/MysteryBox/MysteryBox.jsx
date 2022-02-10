import React from "react";
import MysteryHero from "./Mystery-Hero/Mystery-Hero.jsx";
import Slider from "./MysterySlider/Slider.jsx";
import MysteryIndex from "./MysteryIndex/MysteryIndex.jsx";
import "./MysteryBox.css";
function MysteryBox({ dark }) {
  return (
    <div className="mystery-box">
      <MysteryHero />
      <div className={`white-box ${dark ? "bg-black" : ""}`}>
        <MysteryIndex dark={dark} />
        <Slider darkMode={dark} />
      </div>
    </div>
  );
}

export default MysteryBox;
