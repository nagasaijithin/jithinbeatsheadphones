import React from "react";
import BeatsLogo from "../assets/BeatsLogo.png";
const Mynav = () => (
  <div className="mynav">
    <div className="flex-nav">
      <div className="logo-wapper">
        <img src={BeatsLogo} alt="Logo" />
      </div>
      <div className="handelbar-wapper">
        <div className="handelbar"></div>
      </div>
    </div>
  </div>
);
export default Mynav;
