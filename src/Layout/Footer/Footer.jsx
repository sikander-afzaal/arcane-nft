import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.svg";
import icon1 from "../../Assets/social1.png";
import icon2 from "../../Assets/social2.png";
import icon3 from "../../Assets/social3.png";
import icon4 from "../../Assets/social4.png";
import icon5 from "../../Assets/social5.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img className="footer-logo" src={logo} alt="" />
        <div className="social-div-footer">
          <p>Arcane Token Copyrights 2022®</p>
          <div className="icon-div">
            <img className="social-icon" src={icon1} alt="" />
            <img className="social-icon" src={icon2} alt="" />
            <img className="social-icon" src={icon3} alt="" />
            <img className="social-icon" src={icon4} alt="" />
            <img className="social-icon" src={icon5} alt="" />
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
