import React, { useState, useEffect } from "react";
import logo from "../../Assets/logo.svg";
import dark from "../../Assets/dark.png";
import light from "../../Assets/light1.png";
import wallet from "../../Assets/wallet.png";
import "./Header.css";
import icon1 from "../../Assets/social1.png";
import icon2 from "../../Assets/social2.png";
import icon3 from "../../Assets/social3.png";
import icon4 from "../../Assets/social4.png";
import icon5 from "../../Assets/social5.png";
function Header() {
  const [darkMode, setDark] = useState(false);
  const [active, setActive] = useState(false);
  const [show, setShow] = useState(false);
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
    <header className={`d-flex align-items-center ${show ? "scroll" : ""}`}>
      <div className="left-header">
        <div className="logo_area">
          <img src={logo} alt="img" />
        </div>
      </div>
      <div className="center-header">
        <ul className={`menu ${active ? "current" : ""}`}>
          <li
            onClick={() => {
              // document.querySelector("body").classList.toggle("dark");
              // document.querySelector(".shape-wrapper").classList.toggle("bg");
              // document.querySelector(".bg-triangle-2").classList.toggle("bg");
              // document.querySelector(".bg-triangle").classList.toggle("bg");
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
            <a href="#">
              <i className="far fa-times"></i>
            </a>
          </li>

          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PROFILE</a>
          </li>
          <li>
            <a href="#">THE TOKEN</a>
          </li>
          <li>
            <a href="#">MYSTERY BOX</a>
          </li>
          <li>
            <a href="#">MARKET PLACE</a>
          </li>
          <li>
            <a href="#">HELP</a>
          </li>
          <li className="header_arcane_box">
            <a href="#">1$ = 0.012829 Arcane </a>
          </li>
          <li
            onClick={() => {
              setDark((prev) => !prev);
            }}
            className={`switch switch-mobile ${darkMode ? "active" : ""}`}
          >
            <img src={light} alt="" />
            <img src={dark} alt="" />
          </li>
          <li>
            <div className="social-div-footer mobile-menu">
              <div className="icon-div">
                <a target={"blank"} href="https://t.me/ArcaneTokenBNB">
                  <img className="social-icon" src={icon1} alt="" />
                </a>
                <a
                  target={"blank"}
                  href="https://twitter.com/arcanetokenbnb?s=21"
                >
                  <img className="social-icon" src={icon2} alt="" />
                </a>
                <a
                  target={"blank"}
                  href="https:instagram.com/arcanetokenbnb?utm_medium=copy_link"
                >
                  <img className="social-icon" src={icon3} alt="" />
                </a>
                <a target={"blank"} href="www.tiktok.com/@arcanetokenbnb">
                  <img className="social-icon" src={icon5} alt="" />
                </a>
                <a
                  target={"blank"}
                  href="https://youtube.com/channel/UCovNe7JAkU6OCucOf0SOQZw"
                >
                  <img className="social-icon" src={icon4} alt="" />
                </a>
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
        <div
          onClick={() => {
            setActive((prev) => !prev);
          }}
          className={`hamburger-menu ${active ? "current" : ""}`}
        >
          <span className={`line-top ${active ? "current" : ""}`}></span>
          <span className={`line-center ${active ? "current" : ""}`}></span>
          <span className={`line-bottom ${active ? "current" : ""}`}></span>
        </div>
      </div>

      {/* <!-- overlay --> */}
      <div className={`overlay ${active ? "current" : ""}`}></div>
    </header>
  );
}

export default Header;
