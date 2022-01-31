import React, { useState, useEffect } from "react";
import logo from "../../Assets/logo.svg";
import dark from "../../Assets/dark.png";
import light from "../../Assets/light1.png";
import wallet from "../../Assets/wallet.png";
import hamburger from "../../Assets/social/Elements-129.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
function Header() {
  const [darkMode, setDark] = useState(false);
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
  const [darkHead, setDarkHead] = useState(false);
  const [menuDark, setMenu] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <header
      className={`d-flex align-items-center ${show ? "scroll" : ""}  ${
        darkHead ? "header-color" : ""
      }`}
    >
      <div className="left-header">
        <div className="logo_area">
          <img src={logo} alt="img" />
        </div>
      </div>
      <div className="center-header">
        <ul
          className={`menu ${
            active ? `current ${menuDark ? "dark" : ""}` : ""
          }`}
        >
          <li
            onClick={() => {
              setDarkHead((prev) => {
                return !prev;
              });
              document.querySelector("body").classList.toggle("dark");
              document.querySelectorAll(".small").forEach((elem) => {
                elem.classList.toggle("font-color");
              });
              document.querySelectorAll(".big").forEach((elem) => {
                elem.classList.toggle("font-color2");
              });
              document.querySelector(".shape-wrapper").classList.toggle("bg");
              document.querySelector(".bg-triangle-2").classList.toggle("bg");
              document.querySelector(".bg-triangle").classList.toggle("bg");
              document.querySelectorAll(".right-desc p").forEach((item) => {
                item.classList.toggle("white");
              });
              document
                .querySelector(".right_top-collect p")
                .classList.toggle("white");
              document
                .querySelector(".collect_right p")
                .classList.toggle("white");
              document
                .querySelector(".open-box-slider")
                .classList.toggle("dark");
              document.querySelector(".qr").classList.toggle("bg");
              document
                .querySelector(".footer")
                .classList.toggle("header-color");
              setDark((prev) => !prev);
            }}
            className={`switch ${darkMode ? "active" : ""}`}
          >
            <img src={light} alt="" />
            <img src={dark} alt="" />
          </li>
          <li
            onClick={() => {
              setActive((prev) => !prev);
            }}
            className="cross"
          >
            <a className="connect-wallet" href="#">
              <img src={wallet} alt="img" />
              <span>Connect Wallet</span>
            </a>
            <i className="far fa-times"></i>
          </li>

          <li className="bottom-border">
            <a href="#">HOME</a>
          </li>
          <li className="bottom-border">
            <a href="#">PROFILE</a>
          </li>
          <li className="bottom-border">
            <a href="#">THE TOKEN</a>
          </li>
          <li className="bottom-border">
            <a href="#">MYSTERY BOX</a>
          </li>
          <li className="bottom-border">
            <a href="#">MARKET PLACE</a>
          </li>
          <li className="bottom-border">
            <a href="#">HELP</a>
          </li>

          <li className="bottom">
            <div className="top-bottom">
              <div className="social-div-footer mobile-menu">
                <div className="icon-div">
                  <a target={"blank"} href="https://t.me/ArcaneTokenBNB">
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                  <a
                    target={"blank"}
                    href="https://twitter.com/arcanetokenbnb?s=21"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    target={"blank"}
                    href="https:instagram.com/arcanetokenbnb?utm_medium=copy_link"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a target={"blank"} href="www.tiktok.com/@arcanetokenbnb">
                    <FontAwesomeIcon
                      style={{ fontSize: " 2.5rem" }}
                      icon={faTiktok}
                    />
                  </a>
                  <a
                    target={"blank"}
                    href="https://youtube.com/channel/UCovNe7JAkU6OCucOf0SOQZw"
                  >
                    {" "}
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom-bottom">
              <div className="header_arcane_box">
                <a href="#">1$ = 0.012829 Arcane </a>
              </div>
              <div
                onClick={() => {
                  setDarkHead((prev) => {
                    return !prev;
                  });

                  document.querySelector("body").classList.toggle("dark");
                  document.querySelector(".menu").classList.toggle("dark");

                  document.querySelectorAll(".small").forEach((elem) => {
                    elem.classList.toggle("font-color");
                  });
                  document.querySelectorAll(".big").forEach((elem) => {
                    elem.classList.toggle("font-color2");
                  });
                  document.querySelectorAll(".right-desc p").forEach((item) => {
                    item.classList.toggle("white");
                  });
                  document
                    .querySelector(".shape-wrapper")
                    .classList.toggle("bg");
                  document
                    .querySelector(".bg-triangle-2")
                    .classList.toggle("bg");
                  document.querySelector(".bg-triangle").classList.toggle("bg");
                  document
                    .querySelector(".right_top-collect p")
                    .classList.toggle("white");
                  document
                    .querySelector(".collect_right p")
                    .classList.toggle("white");
                  document
                    .querySelector(".open-box-slider")
                    .classList.toggle("dark");
                  document.querySelector(".qr").classList.toggle("bg");
                  document
                    .querySelector(".footer")
                    .classList.toggle("header-color");
                  setDark((prev) => !prev);
                  setMenu((prev) => {
                    return !prev;
                  });
                }}
                className={`switch switch-mobile ${darkMode ? "active" : ""}`}
              >
                <img src={light} alt="" />
                <img src={dark} alt="" />
              </div>
            </div>
          </li>
        </ul>

        <div className="header_connect">
          <a className="connect-wallet desktop-connect" href="#">
            <img src={wallet} alt="img" />
            <span>Connect Wallet</span>
          </a>
        </div>
      </div>
      {/* <!-- menu toggler --> */}
      <div className="right-head">
        <a className="connect-wallet mobile-connect" href="#">
          <img src={wallet} alt="img" />
          <span>Connect Wallet</span>
        </a>

        <img
          className="hamburger mobile-connect"
          onClick={() => {
            setActive((prev) => !prev);
          }}
          src={hamburger}
          alt=""
        />
      </div>

      {/* <!-- overlay --> */}
      <div className={`overlay ${active ? "current" : ""}`}></div>
    </header>
  );
}

export default Header;
