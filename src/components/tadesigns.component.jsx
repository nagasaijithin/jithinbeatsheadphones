import React from "react";

import PillPlusFeat from "../assets/PillPlusFeat.png";

import { Button } from "./button.component";

const Tadimg = () => (
  <div
    className="img"
    style={{
      width: "50%"
    }}
  >
    <img
      src={PillPlusFeat}
      alt="two-types-of-img"
      style={{
        width: "100%"
      }}
    />
  </div>
);

const Tadcontent = () => (
  <div className="content">
    <h2>DESIGNED AROUND YOU</h2>
    <ul>
      <li>
        Beats pill+ is designed to fil the room with a rich clear sound filed
        that has as much power as it does definition. With a sleek interface,
        the Beats pill+ is intuitive to use and brings pepole together with
        engaging featues for a unique shared listening experince.
      </li>
      <li>define, pure sound quality in a portable, compact design</li>
      <li>pair ans play with your Bluetooth device</li>
      <li>12-hour rechareable battery</li>
      <li>Built-in speakerphone</li>
      <li>Change out to change your phone and other devices</li>
      <li>Power adapter and Lightning cable included</li>
    </ul>

    <Button>FULL SPECIFICATION</Button>
  </div>
);
export { Tadcontent, Tadimg };
