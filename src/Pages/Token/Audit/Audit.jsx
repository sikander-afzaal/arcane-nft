import React from "react";
import "./Audit.css";
import card from "../../../Assets/Token/Elements-18.png";
import card2 from "../../../Assets/Token/Elements-19.png";
import shape from "../../../Assets/Token/Elements-70.png";
function Audit({ dark }) {
  return (
    <div className="audit">
      <div className={`find-top ${dark ? "top-dark" : ""}`}>
        <h1 className="big">Whitepaper & Audit</h1>
        <h1 className="small">Whitepaper & Audit</h1>
      </div>
      <div className="audit-top">
        <div className="audit-card">
          <img src={card} alt="" />
          <p className={`${dark ? "dark-p" : ""}`}>AUDIT</p>
          <i className="fas fa-download"></i>
        </div>
        <div className="audit-card">
          <img src={card2} alt="" />
          <p className={`${dark ? "dark-p" : ""}`}>WHITEPAPER</p>
          <i className="fas fa-download"></i>
        </div>
      </div>
      <div className={`supply-h1 find-top ${dark ? "top-dark" : ""}`}>
        <h1 className="big">SUPPLY</h1>
        <h1 className="small">SUPPLY</h1>
      </div>
      <div className="audit-bottom">
        <img src={shape} alt="" />
      </div>
    </div>
  );
}

export default Audit;
