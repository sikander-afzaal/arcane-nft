import React from "react";
import "./Hero.css";
import bg from "../../../Assets/PC.png";
import bg2 from "../../../Assets/Mobile.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
function Hero() {
  return (
    <div className="hero">
      <Splide
        options={{
          interval: 3000,
          autoplay: true,
          type: "loop",
          rewind: true,
          loop: true,
          perPage: 1,
          height: "auto",
          width: "100%",
          arrows: false,
          pagination: true,
          drag: true,
        }}
      >
        <SplideSlide>
          <img className="desktop-bg" src={bg} alt="" />
          <img className="mobile-bg" src={bg2} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="desktop-bg" src={bg} alt="" />
          <img className="mobile-bg" src={bg2} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img className="desktop-bg" src={bg} alt="" />
          <img className="mobile-bg" src={bg2} alt="" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Hero;
