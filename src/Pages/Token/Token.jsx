import React from "react";
import "./Token.css";
import Token_hero from "./Token_hero/Token_hero.jsx";
import Audit from "./Audit/Audit.jsx";
import Tokenomics from "./Tokenomics/Tokenomics.jsx";
//assets

function Token() {
  return (
    <div className="token">
      <Token_hero />
      <Audit />
      <Tokenomics />
    </div>
  );
}

export default Token;
