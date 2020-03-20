import React from "react";

import BeatsPillPlusimage002 from "../assets/BeatsPillPlusimage002.png";

const Beastapp = () => (
  <div className="bppa">
    <div className="bppa-img">
      <img src={BeatsPillPlusimage002} alt="hero-img" />
    </div>
    <div className="bppa-content">
      <div className="bppa-center">
        <h2>BEATS PILL PLUS APP</h2>
        <div className="bppa-content-flex">
          <div>
            <h4>DJ PLAYLIST</h4>
            <p>Grab a friend and conteol the music from two Bluetooth.</p>
          </div>
          <div>
            <h4>AMPLIFY SOUND</h4>
            <p>
              Add a second Beats Pillinto the mix and simulataneously play from
              both speakers for a sound that's twice as full.
            </p>
          </div>
          <div>
            <h4>PUT IN STERIO</h4>
            <p>
              Sync two Beats pill speakers together for dedicated left and right
              playback.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Beastapp;
