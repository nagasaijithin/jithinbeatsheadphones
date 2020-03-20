import React, { useRef, useEffect } from "react";
import pillplusblack01 from "../assets/pillplusblack01.png";
import { Button } from "./button.component";
import { Power3, TimelineMax } from "gsap";
import { CSSPlugin } from "gsap";

export const Home = () => {
  let backgroundtitles = useRef(null);
  let toptitles = useRef("hello");
  let topimg = useRef("hello");
  let c = CSSPlugin;
  let tl = new TimelineMax();
  useEffect(() => {
    tl.to(backgroundtitles, 1, {
      opacity: 1,
      y: -80,
      ease: Power3.easeOut
    })
      .to(toptitles, 1, {
        opacity: 1,
        y: -30,
        ease: Power3.easeOut
      })
      .to(topimg, 1, {
        opacity: 1
      });
  }, [tl, c]);
  return (
    <div className="main-hero">
      <div className="center-content" ref={el => (backgroundtitles = el)}>
        <div className="center-content-list">
          <div>SOUND</div>
          <div>STYLE</div>
          <div>LIFE</div>
          <div>PLAY</div>
        </div>
        <div className="center-content-title">PILL PLUS</div>
      </div>
      <div className="center-main-content">
        <div className="logo-sub-name">
          <p ref={el => (toptitles = el)}>PILL PLUS</p>
        </div>
        <div className="hero-img">
          <img ref={el => (topimg = el)} src={pillplusblack01} alt="heroimg" />
        </div>
        <Button active="active">BUY NOW</Button>
      </div>
    </div>
  );
};
