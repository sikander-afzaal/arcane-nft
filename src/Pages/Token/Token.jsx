import React from "react";
import "./Token.css";
import Token_hero from "./Token_hero/Token_hero.jsx";
import Audit from "./Audit/Audit.jsx";
import Tokenomics from "./Tokenomics/Tokenomics.jsx";
import Buy from "./Buy/Buy.jsx";
import Roadmap from "./Roadmap/Roadmap.jsx";
import QR from "../Home/QR/QR.jsx";
//assets

function Token() {
  return (
    <div className="token">
      <Token_hero />
      <div className="shape-wrapper">
        <div className="bg-triangle">
          <Audit />
        </div>
        <div className="bg-triangle-2">
          <Tokenomics />
        </div>
        <div className="bg-triangle">
          <Roadmap />
        </div>
        <Buy />

        <QR />
      </div>
    </div>
  );
}

export default Token;
