import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.svg";
import youtube from "../../Assets/social/Elements-123.png";
import insta from "../../Assets/social/Elements-124.png";
import twitter from "../../Assets/social/Elements-125.png";
import tiktok from "../../Assets/social/Elements-126.png";
import telegram from "../../Assets/social/Elements-127.png";
function Footer({ dark }) {
  return (
    <div className={`footer ${dark ? "header-color" : ""}`}>
      <div className="footer-left">
        <img className="footer-logo" src={logo} alt="" />
        <div className="social-div-footer">
          <p>Arcane Token Copyrights 2022®</p>
          <div className="icon-div">
            <a target={"blank"} href="https://t.me/ArcaneTokenBNB">
              <img className="social-icon" src={telegram} alt="" />
            </a>
            <a target={"blank"} href="https://twitter.com/arcanetokenbnb?s=21">
              <img className="social-icon" src={twitter} alt="" />
            </a>
            <a
              target={"blank"}
              href="https://instagram.com/arcanetokenbnb?utm_medium=copy_link"
            >
              <img className="social-icon" src={insta} alt="" />
            </a>
            <a target={"blank"} href="www.tiktok.com/@arcanetokenbnb">
              <img className="social-icon" src={tiktok} alt="" />
            </a>
            <a
              target={"blank"}
              href="https://youtube.com/channel/UCovNe7JAkU6OCucOf0SOQZw"
            >
              <img className="social-icon" src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right_col1">
          <h2>INFORMATION</h2>
          <p>Whitepaper</p>
          <p>Audit</p>
          <p>Liquidity Lock</p>
          <p>Medium</p>
        </div>
        <div className="footer-right_col2">
          <h2>LINKS</h2>
          <p>CoinMarketCap</p>
          <p>CoinGecko</p>
          <p>Arcane Swap</p>
          <p>Theme Song</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
