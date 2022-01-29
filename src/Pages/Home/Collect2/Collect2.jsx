import React from "react";
import "./Collect2.css";
import fly from "../../../Assets/my_fly.svg";
import shape from "../../../Assets/circle/Elements-16.png";
import img from "../../../Assets/circle/Elements-02.png";
import img2 from "../../../Assets/circle/Elements-03.png";
import img3 from "../../../Assets/circle/Elements-04.png";
import img4 from "../../../Assets/circle/Elements-05.png";
import img5 from "../../../Assets/circle/Elements-06.png";
import img6 from "../../../Assets/circle/Elements-07.png";
import img7 from "../../../Assets/circle/Elements-08.png";
import letter from "../../../Assets/a.svg";
function Collect2() {
  return (
    <div className="collect2">
      <div data-aos="fade-right" className="collect2_left">
        <img src={shape} alt="" />
        <div data-text="wallet" className="collect-box">
          <img src={img6} alt="" />
          <p>WALLET</p>
        </div>
        <div data-text="meta" className="collect-box">
          <img src={img3} alt="" />
          <p>METAVERSE</p>
        </div>
        <div data-text="store" className="collect-box">
          <img src={img} alt="" />
          <p>STORE</p>
        </div>
        <div data-text="box" className="collect-box">
          <img src={img5} alt="" />
          <p>MYSTERY BOX</p>
        </div>
        <div data-text="mobile" className="collect-box">
          <img src={img4} alt="" />
          <p>MOBILE</p>
        </div>
        <div data-text="cards" className="collect-box">
          <img src={img2} alt="" />
          <p>CARDS</p>
        </div>
        <div data-text="sword" className="collect-box">
          <img src={img7} alt="" />
          <p>SWORD</p>
        </div>
      </div>
      <div className="collect2_right">
        <div data-aos="fade-left" className="right_top-collect">
          <h2>NEKOVERSE</h2>
          <p>
            The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1000" className="right-box">
          <div className="box-top">
            <img src={fly} alt="" />
            <p>Mystery Box</p>
          </div>
          <p>
            The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.
          </p>
          <button>
            <img src={letter} alt="" /> COMING SOON
          </button>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        className="right-box mobile-box"
      >
        <div className="box-top">
          <img src={fly} alt="" />
          <p>Mystery Box</p>
        </div>
        <p>
          The mystery box will be available for $10, each box will have either
          of Five different NFT rarities. Holders will be able to sell their
          NFTs on Arcane Market Place.
        </p>
        <button>
          <img src={letter} alt="" /> COMING SOON
        </button>
      </div>
    </div>
  );
}

export default Collect2;
