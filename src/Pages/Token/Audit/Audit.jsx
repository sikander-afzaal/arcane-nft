import React from "react";
import "./Audit.css";
import card from "../../../Assets/Token/Elements-18.png";
import card2 from "../../../Assets/Token/Elements-19.png";
import shape from "../../../Assets/Token/Elements-70.png";
function Audit() {
  return (
    <div className="audit">
      <div className="find-top">
        <h1 className="big">Whitepaper & Audit</h1>
        <h1 className="small">Whitepaper & Audit</h1>
      </div>
      <div className="audit-top">
        <div className="audit-card">
          <img src={card} alt="" />
          <p>AUDIT</p>
          <i className="fas fa-download"></i>
        </div>
        <div className="audit-card">
          <img src={card2} alt="" />
          <p>WHITEPAPER</p>
          <i className="fas fa-download"></i>
        </div>
      </div>
      <div className="audit-bottom">
        <img src={shape} alt="" />
      </div>
    </div>
  );
}

export default Audit;
