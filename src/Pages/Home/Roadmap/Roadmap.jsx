import React from "react";
import "./Roadmap.css";
import img1 from "../../../Assets/r1.png";
import img2 from "../../../Assets/r2.png";
import img3 from "../../../Assets/r3.png";
import img4 from "../../../Assets/r4.png";
import img5 from "../../../Assets/r5.png";
import bgBox from "../../../Assets/s-box.svg";
function Roadmap() {
  return (
    <div className="roadmap">
      <div className="find-top road-top">
        <h1 className="big">NFTs ROAD MAP</h1>
        <h1 className="small">NFTs ROAD MAP</h1>
        <p>THIS PLAN OF NFTS ROAD MAP IS SUBJECTED TO CHANGE</p>
      </div>
      <div className="road-bottom desktop">
        <div className="road-bottom-row1">
          <div className="road-box">
            <h1>Anime NFT</h1>
            <img src={img1} alt="" className="road-img" />
          </div>
          <div className="road-box">
            <h1>3D Half Body NFT</h1>
            <img src={img2} alt="" className="road-img" />
          </div>
          <div className="road-box">
            <h1>NFTs Cards</h1>
            <img src={img3} alt="" className="road-img" />
          </div>
          <div className="road-box"></div>
          <div className="road-box"></div>
          <div className="road-box"></div>
        </div>
        <div className="road-bottom-row2">
          <div className="circle-div">
            <h1>S1</h1>
            <img src={bgBox} alt="" />
          </div>
          <div className="circle-div">
            <h1>S2</h1>
            <img src={bgBox} alt="" />
          </div>
          <div className="circle-div">
            <h1>S3</h1>
            <img src={bgBox} alt="" />
          </div>
          <div className="circle-div">
            <h1>S4</h1>
            <img src={bgBox} alt="" />
          </div>
          <div className="circle-div">
            <h1>S5</h1>
            <img src={bgBox} alt="" />
          </div>
          <div className="circle-div">
            <h1>S6</h1>
            <img src={bgBox} alt="" />
          </div>
        </div>
        <div className="road-bottom-row3">
          <div className="road-box none1"></div>
          <div className="road-box none1"></div>
          <div className="road-box none1"></div>
          <div className="road-box4 road-box">
            <img src={img4} alt="" className="road-img" />
            <h1>3D Full Body</h1>
          </div>
          <div className="road-box5 road-box">
            <img src={img5} alt="" className="road-img" />
            <h1>Full Body GIF</h1>
          </div>
          <div className="road-box6 road-box">
            <p>Coming Soon</p>
            <h1>Coming Soon</h1>
          </div>
        </div>
      </div>
      <div className="road-bottom mobile">
        <div className="road-bottom-row3">
          <div className="road-box">
            <h1>3D Half Body NFT</h1>
            <img src={img2} alt="" className="road-img" />
          </div>
          <div className="road-box4 road-box">
            <h1>3D Full Body</h1>
            <img src={img4} alt="" className="road-img" />
          </div>

          <div className="road-box6 road-box">
            <h1>Coming Soon</h1>
            <p>Coming Soon</p>
          </div>
        </div>

        <div className="road-bottom-row2">
          <div className="circle-div">
            <h1>S1</h1>
            <img src={bgBox} alt="" />
          </div>
          <div className="circle-div">
            <h1>S2</h1>
            <img src={bgBox} alt="" />
          </div>
          <div className="circle-div">
            <h1>S3</h1>
            <img src={bgBox} alt="" />
          </div>
          <div className="circle-div">
            <h1>S4</h1>
            <img src={bgBox} alt="" />
          </div>
          <div className="circle-div">
            <h1>S5</h1>
            <img src={bgBox} alt="" />
          </div>
          <div className="circle-div">
            <h1>S6</h1>
            <img src={bgBox} alt="" />
          </div>
        </div>
        <div className="road-bottom-row1">
          <div className="road-box">
            <h1>Anime NFT</h1>
            <img src={img1} alt="" className="road-img" />
          </div>
          <div className="road-box">
            <h1>NFTs Cards</h1>
            <img src={img3} alt="" className="road-img" />
          </div>

          <div className="road-box5 road-box">
            <h1>Full Body GIF</h1>
            <img src={img5} alt="" className="road-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
