import React, { useState } from "react";
import "./MysteryIndex.css";
import box from "../../../Assets/mystrey.png";
import currency from "../../../Assets/currency.png";
function MysteryIndex() {
  const handleChange = (e) => {
    if (e.target.value > 10) {
      return (e.target.value = 10);
    }
  };
  return (
    <div className="mystery-index">
      <div className="left-mystery-index">
        <img src={box} alt="" />
      </div>
      <div className="right-mystery-index">
        <h1>COMMON MYSTERY BOX</h1>
        <h1 className="sup">
          10.00 BUSD <sup>per box</sup> <span className="grey">-$10 USD</span>
        </h1>
        <div className="mid-index">
          <div className="quantity-index num1">
            <p>Quantity</p>
            <input
              maxlength="2"
              onChange={handleChange}
              min="0"
              max="10"
              type="number"
              className="input-quan"
            />
            <button className="index-btn">APPROVE BUSD</button>
          </div>
          <div className="quantity-index">
            <p>Buy with</p>
            <img src={currency} alt="" className="currency" />
            <button className="index-btn">Buy with BUSD</button>
          </div>
        </div>
        <h1>WHAT RARITIES INSIDE/DROP RATE</h1>
        <div className="index-rarity-div">
          <p className="index-rarity silver-rarity">Silver Arcane</p>
          <p className="index-rarity gold-rarity">Gold Arcane</p>
          <p className="index-rarity epic-rarity">Epic Arcane</p>
          <p className="index-rarity diamond-rarity">Diamond Arcane</p>
          <p className="index-rarity challenger-rarity">Challenger Arcane</p>
        </div>
        <p>Rates slightly increased when with Arcane Coin</p>
      </div>
    </div>
  );
}

export default MysteryIndex;
