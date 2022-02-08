import React from "react";
import MysteryHero from "./Mystery-Hero/Mystery-Hero.jsx";
import Slider from "./MysterySlider/Slider.jsx";
import MysteryIndex from "./MysteryIndex/MysteryIndex.jsx";
import "./MysteryBox.css";
function MysteryBox() {
  return (
    <div className="mystery-box">
      <MysteryHero />
      <MysteryIndex />
      <Slider />
    </div>
  );
}

export default MysteryBox;
