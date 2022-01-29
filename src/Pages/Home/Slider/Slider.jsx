import React from "react";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import img1 from "../../../Assets/s1.png";
import img2 from "../../../Assets/s2.png";
import img3 from "../../../Assets/s3.png";
import img4 from "../../../Assets/s4.png";
import star from "../../../Assets/star.svg";
import eye from "../../../Assets/eye.svg";
import left from "../../../Assets/left-arrow.png";
import letter from "../../../Assets/a.svg";
import right from "../../../Assets/right-arrow.png";
function Slider() {
  return (
    <div className="slider">
      <div
        data-aos="fade-down"
        style={{ marginBottom: "6rem" }}
        className="find-top road-top"
      >
        <h1 className="big">COLLECT THEM ALL</h1>
        <h1 className="small">COLLECT THEM ALL</h1>
      </div>
      <Splide
        options={{
          interval: 2000,
          autoplay: true,
          type: "loop",
          rewind: true,
          loop: true,
          perPage: 4,
          height: "auto",
          width: "100%",
          arrows: true,
          focus: "center",
          pagination: false,
          drag: true,
          pauseOnHover: true,
          breakpoints: {
            1000: {
              width: "100%",
              perPage: 2,
            },
            652: {
              width: "100%",
              perPage: 1,
            },
          },
        }}
      >
        <SplideSlide>
          <div className="slide-box green">
            <div className="slide-box-top">
              <img src={img1} alt="" />
            </div>
            <div className="slide-box-mid">
              <h2>ARC</h2>
              <img src={eye} alt="" />
            </div>
            <div className="slide-box-last">
              <div className="star-div">
                <img src={star} alt="" />
              </div>
              <p className="rarity">Gold Arcane</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-box yellow">
            <div className="slide-box-top">
              <img src={img2} alt="" />
            </div>
            <div className="slide-box-mid">
              <h2>ARC</h2>
              <img src={eye} alt="" />
            </div>
            <div className="slide-box-last">
              <div className="star-div">
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="rarity">Gold Arcane</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-box blue">
            <div className="slide-box-top">
              <img src={img3} alt="" />
            </div>
            <div className="slide-box-mid">
              <h2>ARC</h2>
              <img src={eye} alt="" />
            </div>
            <div className="slide-box-last">
              <div className="star-div">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="rarity">Gold Arcane</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-box purple">
            <div className="slide-box-top">
              <img src={img4} alt="" />
            </div>
            <div className="slide-box-mid">
              <h2>ARC</h2>
              <img src={eye} alt="" />
            </div>
            <div className="slide-box-last">
              <div className="star-div">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="rarity">Gold Arcane</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-box green">
            <div className="slide-box-top">
              <img src={img1} alt="" />
            </div>
            <div className="slide-box-mid">
              <h2>ARC</h2>
              <img src={eye} alt="" />
            </div>
            <div className="slide-box-last">
              <div className="star-div">
                <img src={star} alt="" />
              </div>
              <p className="rarity">Gold Arcane</p>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="slide-box purple">
            <div className="slide-box-top">
              <img src={img4} alt="" />
            </div>
            <div className="slide-box-mid">
              <h2>ARC</h2>
              <img src={eye} alt="" />
            </div>
            <div className="slide-box-last">
              <div className="star-div">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="rarity">Gold Arcane</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
      <button data-aos="fade-up">
        <img src={letter} alt="" /> COMING SOON
      </button>
    </div>
  );
}

export default Slider;
