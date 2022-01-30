import React from "react";
import "./Hero.css";
import bg from "../../../Assets/hero_img.svg";
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
          <img src={bg} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={bg} alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src={bg} alt="" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Hero;
