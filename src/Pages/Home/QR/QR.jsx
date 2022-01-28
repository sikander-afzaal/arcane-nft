import React from "react";
import "./QR.css";
import code from "../../../Assets/code.png";
function QR() {
  return (
    <div className="qr">
      <div className="left-qr">
        <img src={code} alt="" />
      </div>
      <div className="right-qr">
        <h1>Join our official Telegram</h1>
        <p>
          The mystery box will be available for $10, <br></br> each box will
          have either of Five different NFT rarities. Holders will be able to
          sell their NFTs on <br></br> Arcane Market Place.
        </p>
      </div>
    </div>
  );
}

export default QR;
