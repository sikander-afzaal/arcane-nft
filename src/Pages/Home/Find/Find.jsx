import React from "react";
import "./Find.css";
import comp from "../../../Assets/Elements-83.png";
import comp2 from "../../../Assets/Elements-84.png";
import comp3 from "../../../Assets/Elements-85.png";
import comp4 from "../../../Assets/Elements-86.png";
import comp5 from "../../../Assets/Elements-87.png";
import comp6 from "../../../Assets/Elements-88.png";
import comp7 from "../../../Assets/Elements-89.png";
function Find() {
  return (
    <div className="find">
      <div data-aos="fade-down" className="find-top">
        <h1 className="big">FIND ARCANE ON</h1>
        <h1 className="small">FIND ARCANE ON</h1>
      </div>
      <div data-aos="fade-up" data-aos-delay="1000" className="find-bottom">
        <img src={comp} alt="" className="comp" />
        <img src={comp2} alt="" className="comp" />
        <img src={comp3} alt="" className="comp" />
        <img src={comp4} alt="" className="comp" />
        <img src={comp5} alt="" className="comp" />
        <img src={comp6} alt="" className="comp" />
        <img src={comp7} alt="" className="comp" />
      </div>
    </div>
  );
}

export default Find;
