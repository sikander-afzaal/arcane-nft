import React, { useState } from "react";
import logo from "../../Assets/logo.svg";
import dark from "../../Assets/dark.png";
import light from "../../Assets/light1.png";
import wallet from "../../Assets/wallet.png";
import "./Header.css";
function Header() {
  const [darkMode, setDark] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <header className="d-flex align-items-center">
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
        </ul>

        <div className="header_connect">
          <div className="header_arcane_box arcane-box-mobile">
            <a href="#">1$ = 0.012829 Arcane </a>
          </div>
          <a className="connect-wallet" href="#">
            <img src={wallet} alt="img" />
            <span>Connect Wallet</span>
          </a>
        </div>
      </div>
      {/* <!-- menu toggler --> */}
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
      {/* <!-- overlay --> */}
      <div className={`overlay ${active ? "current" : ""}`}></div>
    </header>
  );
}

export default Header;
