import React from "react";
import eimg from "../assets/eimg.jpg";

const Itsoundsbigcontent = () => (
  <div className="content">
    <h2>IT SOUND BIGGER</h2>
    <h4>STERIO ACTIVE 2-WAY CROSSOVER</h4>
    <p>
      The stereo active a -way crossover system creates an optimized sound filed
      for dynamic range and clarity across all genres of music.
    </p>
    <h4> TWEETER AND WOOFER SEPARATION</h4>
    <p>Keep your pill updated to get the most out of your speaker</p>
    <h4>NEODYMIUM MAGNET</h4>
    <p>
      Neodymium magnets keeo the driver size small, yet allow for powerful sound
      output
    </p>
  </div>
);
const Itsimg = () => (
  <div className="img">
    <img src={eimg} alt="expline-img" />
  </div>
);

export { Itsoundsbigcontent, Itsimg };
