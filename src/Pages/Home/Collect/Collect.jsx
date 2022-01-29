import React from "react";
import "./Collect.css";
import img from "../../../Assets/mystrey.png";
function Collect() {
  return (
    <div className="collect">
      <div data-aos="fade-right" className="collect_left">
        <img src={img} alt="" />
      </div>
      <div data-aos="fade-left" data-aos-delay="1000" className="collect_right">
        <h2>COLLECT NFTs In mystery box</h2>
        <p>
          The mystery box will be available for $10, each box will have either
          of Five different NFT rarities. Holders will be able to sell their
          NFTs on Arcane Market Place.
        </p>
      </div>
    </div>
  );
}

export default Collect;
