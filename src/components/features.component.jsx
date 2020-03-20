import React from "react";
import { Button } from "./button.component";
import unnamed from "../assets/unnamed.jpg";

const Fc = () => (
  <div className="content">
    <h2>NEW FEATURES</h2>
    <h4>CHARGE OUT</h4>
    <p>
      Use the USB port on the bottom of the speaker to charge yourphone or music
      player.
    </p>
    <h4>FIRMWARE UPDATE</h4>
    <p>Keep your pill updated to get the most out of your speaker.</p>
    <h4>TOP TO AMPLIFY, TAP TO STEREO</h4>
    <p>Tap two new pills together to amplify playback or hear it in stereo.</p>

    <Button>ALL FEATURES</Button>
  </div>
);

const Fimg = () => (
  <div className="img">
    <img src={unnamed} alt="features-Img" />
  </div>
);
export { Fimg, Fc };
