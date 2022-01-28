import React from "react";
import "./Hero.css";
import bg from "../../../Assets/hero_img.svg";
function Hero() {
  return (
    <div className="hero">
      <img src={bg} alt="" />
    </div>
  );
}

export default Hero;
