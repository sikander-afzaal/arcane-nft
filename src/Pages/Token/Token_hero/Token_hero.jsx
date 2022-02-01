import React from "react";
import "./Token_hero.css";
import youtube from "../../../Assets/social/Elements-123.png";
import insta from "../../../Assets/social/Elements-124.png";
import twitter from "../../../Assets/social/Elements-125.png";
import tiktok from "../../../Assets/social/Elements-126.png";
import telegram from "../../../Assets/social/Elements-127.png";
import person from "../../../Assets/Token/Elements-25.png";
import bg1 from "../../../Assets/Token/Elements-53.png";
import bg2 from "../../../Assets/Token/Elements-54.png";
import bg3 from "../../../Assets/Token/Elements-55.png";
import letter from "../../../Assets/a.svg";
function Token_hero() {
  function copyToClipboard(e) {
    const copiedText = document.querySelector(".address").innerText;
    navigator.clipboard.writeText(copiedText);
  }
  return (
    <div className="token_hero">
      <div className="token_hero-left">
        <div className="find-top">
          <h1 className="big">THIS IS TOKEN</h1>
          <h1 className="small">
            This Is <br /> Arcane
          </h1>
        </div>

        <p>
          Arcane is an NFT focused, community driven crypto currency, with real
          world use.
        </p>
        <div className="left-bg-div desktop-token">
          <div className="bg-box">
            <img src={bg1} alt="" />
            <p>9852</p>
          </div>
          <div className="bg-box">
            <img src={bg2} alt="" />
            <p>10%</p>
          </div>
          <div className="bg-box">
            <img src={bg3} alt="" />
            <p>25K +</p>
          </div>
        </div>
        <div className="mobile-token bg-mobile-box">
          <div className="row-1-bg">
            <div className="bg-box-mobile">
              <h1>9852</h1>
              <p>Arcane Holders</p>
            </div>
            <div className="bg-box-mobile">
              <h1>10%</h1>
              <p>Total Token Burn</p>
            </div>
          </div>
          <div className="row-1-bg">
            <div className="bg-box-mobile">
              <h1>25K +</h1>
              <p>Telegram Members</p>
            </div>
            <button className="letter">
              <img src={letter} alt="" /> COMING SOON
            </button>
          </div>
        </div>
        <div className="buy-arcane-div">
          <button className="desktop-token">
            <img src={letter} alt="" /> COMING SOON
          </button>
          <div className="address-div">
            <div onClick={copyToClipboard} className="abosulte-copy">
              <i className="far fa-copy"></i>
              Copy To Clipboard
            </div>
            <p>Contract Address</p>
            <p className="address">
              0x79eBC9A2ce02277A4b5b3A768b1C0A4ed75Bd936
            </p>
          </div>
        </div>
        <div className="token-hero-social">
          <p>Our Communities</p>
          <div className="icon-div">
            <a target={"blank"} href="https://t.me/ArcaneTokenBNB">
              <img className="social-icon" src={telegram} alt="" />
            </a>
            <a target={"blank"} href="https://twitter.com/arcanetokenbnb?s=21">
              <img className="social-icon" src={twitter} alt="" />
            </a>
            <a
              target={"blank"}
              href="https:instagram.com/arcanetokenbnb?utm_medium=copy_link"
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
      <div className="token_hero-right">
        <img src={person} alt="" />
      </div>
    </div>
  );
}

export default Token_hero;
