import React, { useState } from "react";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import img1 from "../../../Assets/s1.png";
import img2 from "../../../Assets/s2.png";
import img3 from "../../../Assets/s3.png";
import img4 from "../../../Assets/s4.png";
import star from "../../../Assets/star.svg";
import eye from "../../../Assets/eye.svg";
import letter from "../../../Assets/a.svg";
import owner from "../../../Assets/Group 356.png";
function Slider() {
  const data = [
    {
      num: 1,
      img: img1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
              running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 4,
      img: img4,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
              running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "purple",
    },
    {
      num: 2,
      img: img2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
              running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "yellow",
    },
    {
      num: 3,
      img: img3,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
              running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "blue",
    },
  ];
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("");
  const [img, setImg] = useState("");
  const clickHandler = (e) => {
    setOpen(true);
    const dataSet = e.target.dataset.num;
    data.forEach((elem) => {
      if (elem.num == dataSet) {
        setDesc(elem.desc);
        setColor(elem.color);
        setImg(elem.img);
      }
    });
  };
  return (
    <div className="slider">
      <div className={`overlay-2 ${open ? "down" : ""}`}></div>
      <div className={`open-box-slider ${open ? "down-box" : ""}`}>
        <i
          onClick={() => {
            setOpen(false);
          }}
          className="fas fa-times close-box"
        ></i>
        <div className="left-slider-box">
          <img src={img} alt="" />
        </div>
        <div className="right-slider-box">
          <div className="find-top">
            <h1 className="big">ARC</h1>
            <h1 className="small">ARC</h1>
          </div>
          <div className="rarity-div">
            <p className={`rarity-box ${color}`}>Gold Arcane</p>
            <div className="star-div">
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <div className="bio-div">
            <h1>BIO</h1>
            <p className="desc-bio">{desc}</p>
          </div>
          <div className="owners-div">
            <img src={owner} alt="" />
            <p>
              600 <br /> OWNERS
            </p>
          </div>
        </div>
      </div>
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
              <img data-num={1} onClick={clickHandler} src={eye} alt="" />
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
              <img data-num={2} onClick={clickHandler} src={eye} alt="" />
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
              <img data-num={3} onClick={clickHandler} src={eye} alt="" />
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
              <img data-num={4} onClick={clickHandler} src={eye} alt="" />
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
              <img data-num={1} onClick={clickHandler} src={eye} alt="" />
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
              <img data-num={4} onClick={clickHandler} src={eye} alt="" />
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
