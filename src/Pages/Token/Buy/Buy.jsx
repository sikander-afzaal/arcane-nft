import React from "react";
import "./Buy.css";
import card from "../../../Assets/Token/Elements-20.png";
import bag from "../../../Assets/Token/Elements-56.png";
import girl from "../../../Assets/Token/Elements-57.png";
function Buy() {
  return (
    <div className="buy">
      <div className="find-top">
        <h1 className="big">HOW TO BUY</h1>
        <h1 className="small">HOW TO BUY</h1>
      </div>
      <div className="card-div-buy">
        <img src={card} alt="" />
        <i className="fas fa-download"></i>
      </div>
      <img src={girl} alt="" className="girl" />
      <img src={bag} alt="" className="bag" />
    </div>
  );
}

export default Buy;
