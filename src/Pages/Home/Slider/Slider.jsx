import React, { useState } from "react";
import "./Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import silver1 from "../../../Assets/Slider/silver (1).png";
import silver2 from "../../../Assets/Slider/silver (2).png";
import silver3 from "../../../Assets/Slider/silver (3).png";
import silver4 from "../../../Assets/Slider/silver (4).png";
import silver5 from "../../../Assets/Slider/silver (5).png";
import legend1 from "../../../Assets/Slider/legend (1).png";
import legend2 from "../../../Assets/Slider/legend (2).png";
import diamond from "../../../Assets/Slider/diamond (1).png";
import diamond2 from "../../../Assets/Slider/diamond (2).png";
import gold from "../../../Assets/Slider/gold (1).png";
import gold2 from "../../../Assets/Slider/gold (2).png";
import gold3 from "../../../Assets/Slider/gold (3).png";
import epic from "../../../Assets/Slider/epic (1).png";
import epic2 from "../../../Assets/Slider/epic (2).png";
import star from "../../../Assets/star.svg";
import eye from "../../../Assets/eye.svg";
import letter from "../../../Assets/a.svg";
import owner from "../../../Assets/Group 356.png";
function Slider() {
  const images = [
    silver3,
    silver2,
    silver1,
    silver4,
    silver5,
    gold,
    gold2,
    gold3,
    diamond,
    diamond2,
    epic,
    epic2,
    legend1,
    legend2,
  ];
  const data = [
    {
      num: 0,
      img: silver3,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 1,
      img: silver2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 2,
      img: silver1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 3,
      img: silver4,
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
      img: silver5,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 5,
      img: gold,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 6,
      img: gold2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 7,
      img: gold3,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 8,
      img: diamond,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 9,
      img: diamond2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 10,
      img: epic,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 11,
      img: epic2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 12,
      img: legend1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
    {
      num: 13,
      img: legend2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "green",
    },
  ];
  const [open, setOpen] = useState(false);
  const [view, showEye] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("");
  const [img, setImg] = useState("");
  const [dark, setDark] = useState("");
  const clickHandler = (e) => {
    if (document.querySelector("header").classList.contains("header-color")) {
      setDark("dark");
    } else {
      setDark("");
    }
    setOpen(true);
    const dataSet = e.target.dataset.num;
    console.log(e.target);
    data.forEach((elem) => {
      if (elem.num == dataSet) {
        console.log(elem.num);
        console.log(dataSet);
        setDesc(elem.desc);
        setColor(elem.color);
        setImg(elem.img);
      }
    });
  };
  return (
    <div className="slider">
      <div className={`overlay-2 ${open ? "down" : ""}`}></div>
      <div className={`open-box-slider ${open ? `down-box ${dark}` : ""}`}>
        <i
          onClick={() => {
            showEye((prev) => {
              const copy = [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
              ];

              return copy;
            });
            setOpen(false);
            console.log(view);
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
        {images.map((img, key) => {
          return (
            <SplideSlide key={key}>
              <div
                onClick={() => {
                  showEye((prev) => {
                    const copy = [
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                      false,
                    ];
                    copy[key] = true;
                    return copy;
                  });
                }}
                className="slide-box"
              >
                <div
                  style={{ pointerEvents: "none" }}
                  className="slide-box-top"
                >
                  <img style={{ pointerEvents: "none" }} src={img} alt="" />
                </div>
                <div className={`eye-div ${view[key] ? "open-eye" : ""}`}>
                  <img
                    className={`${view[key] ? "open-eye" : ""}`}
                    data-num={key}
                    onClick={clickHandler}
                    src={eye}
                    alt=""
                  />
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
      <button data-aos="fade-up">
        <img src={letter} alt="" />
        Buy MysteryBox
      </button>
    </div>
  );
}

export default Slider;
