import React from "react";
import "./Collect2.css";
import fly from "../../../Assets/my_fly.svg";
import shape from "../../../Assets/mystery_group.svg";
import letter from "../../../Assets/a.svg";
function Collect2() {
  return (
    <div className="collect2">
      <div className="collect2_left">
        <img src={shape} alt="" />
      </div>
      <div className="collect2_right">
        <div className="right_top-collect">
          <h2>NEKOVERSE</h2>
          <p>
            The mystery box will be available for $10, each box will have either
            of Five different NFT rarities. Holders will be able to sell their
            NFTs on Arcane Market Place.
          </p>
        </div>
        <div className="right-box">
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
      <div className="right-box mobile-box">
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
