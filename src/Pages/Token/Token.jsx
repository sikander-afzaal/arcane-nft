import React from "react";
import "./Token.css";
import Token_hero from "./Token_hero/Token_hero.jsx";
import Audit from "./Audit/Audit.jsx";
//assets

function Token() {
  return (
    <div className="token">
      <Token_hero />
      <Audit />
    </div>
  );
}

export default Token;
