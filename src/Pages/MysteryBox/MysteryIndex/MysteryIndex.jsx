import React, { useState } from "react";
import "./MysteryIndex.css";
import box from "../../../Assets/mystrey.png";
import currency from "../../../Assets/currency.png";
import letterA from "../../../Assets/Token/Elements-59.png";
function MysteryIndex({ dark }) {
  const [value, setValue] = useState(0);
  const increment = (e) => {
    if (value < 10 && value >= 0) {
      setValue((prev) => {
        return prev + 1;
      });
    }
  };
  const decrement = (e) => {
    if (value <= 10 && value > 0) {
      setValue((prev) => {
        return prev - 1;
      });
    }
  };
  return (
    <div className="mystery-index">
      <img src={letterA} alt="" className="letter-abs" />
      <div className="left-mystery-index">
        <img src={box} alt="" />
      </div>
      <div className="right-mystery-index">
        <h1 className={`${dark ? "white" : ""}`}>COMMON MYSTERY BOX</h1>
        <h1 className={`sup ${dark ? "white" : ""}`}>
          10.00 BUSD <sup>per box</sup> <span className="grey">-$10 USD</span>
        </h1>
        <div className="mid-index">
          <div className="quantity-index num1">
            <p className={`${dark ? "white" : ""}`}>Quantity</p>
            <div className="input-div-index">
              <input
                maxLength="2"
                value={value}
                min="0"
                max="10"
                type="tel"
                readOnly
                className="input-quan"
              />
              <p onClick={increment} className="increment">
                {"<"}
              </p>
              <p onClick={decrement} className="decrement">
                {">"}
              </p>
            </div>
          </div>
          <div className="quantity-index">
            <p className={`${dark ? "white" : ""}`}>Buy with</p>
            <img src={currency} alt="" className="currency" />
            <button className="index-btn">Buy with BUSD</button>
          </div>
        </div>
        <div className="bottom-right-index">
          <h1 className={`${dark ? "white" : ""}`}>
            WHAT RARITIES INSIDE/DROP RATE
          </h1>
          <div className="index-rarity-div">
            <p className="index-rarity silver-rarity">Silver Arcane</p>
            <p className="index-rarity gold-rarity">Gold Arcane</p>
            <p className="index-rarity epic-rarity">Epic Arcane</p>
            <p className="index-rarity diamond-rarity">Diamond Arcane</p>
            <p className="index-rarity challenger-rarity">Challenger Arcane</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MysteryIndex;
