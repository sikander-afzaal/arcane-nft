import React from "react";
import "./QR.css";
import code from "../../../Assets/code.png";
function QR() {
  return (
    <div className="qr">
      <div data-aos="fade-right" className="left-qr">
        <img src={code} alt="" />
      </div>
      <div data-aos="fade-left" className="right-qr">
        <h1>Join our official Telegram</h1>
        <p>
          Join our Telegram group to get all news about the project, have some
          insights before anyone else, and have fun with the community
        </p>
      </div>
    </div>
  );
}

export default QR;
