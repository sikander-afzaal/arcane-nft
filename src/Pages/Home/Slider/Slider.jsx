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
import diamond3 from "../../../Assets/Slider/diamond (3).png";
import gold from "../../../Assets/Slider/gold (1).png";
import gold2 from "../../../Assets/Slider/gold (2).png";
import gold3 from "../../../Assets/Slider/gold (3).png";
import gold4 from "../../../Assets/Slider/gold (4).png";
import gold5 from "../../../Assets/Slider/gold (5).png";
import epic from "../../../Assets/Slider/epic (1).png";
import epic2 from "../../../Assets/Slider/epic (2).png";
import star from "../../../Assets/star.svg";
import eye from "../../../Assets/eye.png";
import letter from "../../../Assets/a.svg";
import silverOpen1 from "../../../Assets/Slider/Open slider/SILVER/Pizza_D_ARC.png";
import silverOpen1_bg from "../../../Assets/Slider/Open slider/SILVER/Background-2.jpg";
import silverOpen2 from "../../../Assets/Slider/Open slider/SILVER/Academy_ARC.png";
import silverOpen2_bg from "../../../Assets/Slider/Open slider/SILVER/Background for ACADEMY.jpg";
import silverOpen3 from "../../../Assets/Slider/Open slider/SILVER/ARC.png";
import silverOpen3_bg from "../../../Assets/Slider/Open slider/SILVER/Background-4.jpg";
import silverOpen4 from "../../../Assets/Slider/Open slider/SILVER/Nurse ARC.png";
import silverOpen4_bg from "../../../Assets/Slider/Open slider/SILVER/Background.jpg";
import silverOpen5 from "../../../Assets/Slider/Open slider/SILVER/Officer_ARC.png";
import silverOpen5_bg from "../../../Assets/Slider/Open slider/SILVER/Background-2.jpg";
import goldOpen1 from "../../../Assets/Slider/Open slider/GOLD/Astronaut_ARC.png";
import goldOpen1_bg from "../../../Assets/Slider/Open slider/GOLD/Background for Astronaut.jpg";
import goldOpen2 from "../../../Assets/Slider/Open slider/GOLD/Basket_Player_ARC.png";
import goldOpen2_bg from "../../../Assets/Slider/Open slider/GOLD/Background for BPARC.jpg";
import goldOpen3 from "../../../Assets/Slider/Open slider/GOLD/Elite_ARC.png";
import goldOpen3_bg from "../../../Assets/Slider/Open slider/GOLD/Background for Elite.jpg";
import diamondOpen1 from "../../../Assets/Slider/Open slider/DIAMOND/Royal_Star_ARC.png";
import diamondOpen1_bg from "../../../Assets/Slider/Open slider/DIAMOND/Royal-star-bg.jpg";
import diamondOpen2 from "../../../Assets/Slider/Open slider/DIAMOND/Starship_ARC.png";
import diamondOpen2_bg from "../../../Assets/Slider/Open slider/DIAMOND/Starship Background.jpg";
import epicOpen1 from "../../../Assets/Slider/Open slider/EPIC/Justice_ARC.png";
import epicOpen1_bg from "../../../Assets/Slider/Open slider/EPIC/Background for Justice ARC.jpg";
import epicOpen2 from "../../../Assets/Slider/Open slider/EPIC/Masked_Devil_ARC.png";
import epicOpen2_bg from "../../../Assets/Slider/Open slider/EPIC/Background for Masked Devil.jpg";
import legendOpen1 from "../../../Assets/Slider/Open slider/LEGENDARY/The_Light_Knight_ARC.png";
import legendOpen1_bg from "../../../Assets/Slider/Open slider/LEGENDARY/Background for LightKnight.jpg";
import legendOpen2 from "../../../Assets/Slider/Open slider/LEGENDARY/Golden_ARC.png";
import legendOpen2_bg from "../../../Assets/Slider/Open slider/LEGENDARY/Background for GoldenARC.jpg";
function Slider({ darkMode }) {
  const images = [
    silver3,
    silver2,
    silver1,
    silver4,
    silver5,
    gold,
    gold2,
    gold3,
    gold4,
    gold5,
    diamond,
    diamond2,
    diamond3,
    epic,
    epic2,
    legend1,
    legend2,
  ];
  const data = [
    {
      num: 0,
      img: silverOpen3,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Silver",
      background: silverOpen3_bg,
      star: [1],
      name: "ARC",
    },
    {
      num: 1,
      img: silverOpen2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Silver",
      background: silverOpen2_bg,
      star: [1],
      name: "ACADEMY ARC",
    },
    {
      num: 2,
      img: silverOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Silver",
      background: silverOpen1_bg,
      star: [1],
      name: "PIZZA DELIVERY ARC",
    },
    {
      num: 3,
      img: silverOpen4,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Silver",
      background: silverOpen4_bg,
      star: [1],
      name: "NURSE ARC",
    },
    {
      num: 4,
      img: silverOpen5,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Silver",
      background: silverOpen5_bg,
      star: [1],
      name: "OFFICER ARC",
      class: "officer",
    },
    {
      num: 5,
      img: goldOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Gold",
      background: goldOpen1_bg,
      star: [1, 2],
      name: "ASTRONAUT ARC",
    },
    {
      num: 6,
      img: goldOpen2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Gold",
      background: goldOpen2_bg,
      star: [1, 2],
      name: "BASKET PLAYER ARC",
    },
    {
      num: 7,
      img: goldOpen3,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Gold",
      background: goldOpen3_bg,
      star: [1, 2],
      name: "ELITE ARC",
    },
    {
      num: 8,
      img: goldOpen3,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Gold",
      background: goldOpen3_bg,
      star: [1, 2],
      name: "ARCADE ARC",
    },
    {
      num: 9,
      img: goldOpen3,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Gold",
      background: goldOpen3_bg,
      star: [1, 2],
      name: "PAJAMA ARC",
    },
    {
      num: 10,
      img: diamondOpen2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Diamond",
      background: diamondOpen2_bg,
      star: [1, 2, 3],

      name: "STARSHIP ARC",
    },
    {
      num: 11,
      img: diamondOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Diamond",
      background: diamondOpen1_bg,
      star: [1, 2, 3],
      name: "ROYAL STAR ARC",
    },
    {
      num: 12,
      img: diamondOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Diamond",
      background: diamondOpen1_bg,
      star: [1, 2, 3],
      name: "SAKURA ARC",
    },
    {
      num: 13,
      img: epicOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Epic",
      background: epicOpen1_bg,
      star: [1, 2, 3, 4],
      name: "JUSTICE ARC",
    },
    {
      num: 14,
      img: epicOpen2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Epic",
      background: epicOpen2_bg,
      star: [1, 2, 3, 4],
      name: "MASKED DEVIL ARC",
    },
    {
      num: 15,
      img: legendOpen1,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Legendary",
      background: legendOpen1_bg,
      star: [1, 2, 3, 4, 5],
      name: "THE LIGHT KNIGHT ARC",
    },
    {
      num: 16,
      img: legendOpen2,
      desc: ` Mae has always been a good kitty, getting straight A's, while even
            running her highschool bookclub on the side. She always pushes
              herself to do the best she can in everything that she does. She
              may have not decided what to do outside of highschool yet, but she
              does know that she'll achieve whatever she puts her mind to, no
              matter what!"`,
      color: "Legendary",
      background: legendOpen2_bg,
      star: [1, 2, 3, 4, 5],
      name: "GOLDEN ARC",
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
    false,
    false,
    false,
  ]);
  const [desc, setDesc] = useState("");
  const [color, setColor] = useState("");
  const [img, setImg] = useState("");
  const [dark, setDark] = useState("");
  const [bg, setBg] = useState("");
  const [starA, setStar] = useState([]);
  const [name, setName] = useState("");
  const [class2, setClass] = useState("");
  const clickHandler = (e) => {
    if (darkMode === true) {
      setDark("dark");
    } else {
      setDark("");
    }
    setOpen(true);
    const dataSet = e.target.dataset.num;
    data.forEach((elem) => {
      if (elem.num == dataSet) {
        setDesc(elem.desc);
        setColor(elem.color);
        setImg(elem.img);
        setBg(elem.background);
        setStar(elem.star);
        setName(elem.name);
        if (elem.class != null) {
          setClass(elem.class);
        }
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
          <img src={bg} alt="" className="abs-img-bg" />
          <img className={`girl-img ${class2}`} src={img} alt="" />
        </div>
        <div className="right-slider-box">
          <div className="arc-title">
            <h1 className={`arc-name ${darkMode ? "dark-p" : ""}`}>{name}</h1>
          </div>
          <div className="rarity-div">
            <p className={`rarity-box ${color}`}>{`${color} Arc`}</p>
            <div className="star-div">
              {starA.map((elem, index) => {
                return <img src={star} key={index} alt="" />;
              })}
            </div>
          </div>
          <div className="bio-div">
            <h1>BIO</h1>
            <p className="desc-bio">{desc}</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-down"
        style={{ marginBottom: "6rem" }}
        className={`find-top ${darkMode ? "top-dark" : ""}`}
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
