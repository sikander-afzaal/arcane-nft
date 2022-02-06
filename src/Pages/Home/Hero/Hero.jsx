import React from "react";
import "./Hero.css";
import bg from "../../../Assets/banners/b1.png";
import bgMobile from "../../../Assets/banners/b1-mobile.png";
import bg2 from "../../../Assets/banners/b2.mp4";
import bg2Mobile from "../../../Assets/banners/b2-mobile.mp4";
import bg3 from "../../../Assets/banners/b3.mp4";
import bg3Mobile from "../../../Assets/banners/b3-mobile.mp4";
import bg4 from "../../../Assets/banners/b4.png";
import bg4Mobile from "../../../Assets/banners/b4-mobile.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
function Hero() {
  return (
    <div className="hero">
      <Splide
        options={{
          // interval: 3000,
          // autoplay: true,
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
          <img className="mobile-bg" src={bgMobile} alt="" />
        </SplideSlide>
        <SplideSlide>
          <video
            className="desktop-bg"
            controls={false}
            muted={true}
            autoPlay={true}
            src={bg2}
            loop={true}
          ></video>
          <video
            className="mobile-bg"
            controls={false}
            muted={true}
            autoPlay={true}
            src={bg2Mobile}
            loop={true}
          ></video>
        </SplideSlide>
        <SplideSlide>
          <video
            className="desktop-bg"
            controls={false}
            muted={true}
            autoPlay={true}
            src={bg3}
            loop={true}
          ></video>
          <video
            className="mobile-bg"
            controls={false}
            muted={true}
            autoPlay={true}
            src={bg3Mobile}
            loop={true}
          ></video>
        </SplideSlide>
        <SplideSlide>
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x477565b356b3973d16e8cd837c6970613f13e24a"
            target={"blank"}
          >
            <img className="desktop-bg" src={bg4} alt="" />
            <img className="mobile-bg" src={bg4Mobile} alt="" />
          </a>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Hero;
