import React from "react";
import "./Video.css";
import vidImg from "../../../Assets/play-bg.png";
import play from "../../../Assets/play.png";
function Video() {
  return (
    <div className="video">
      <img className="vid" src={vidImg} alt="" />
      <img src={play} alt="" className="play" />
    </div>
  );
}

export default Video;
