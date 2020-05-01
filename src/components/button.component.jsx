import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import { CSSPlugin } from "gsap";

export const Button = ({ active, children }) => {
  let butn = useRef("");
  useEffect(() => {
    TweenMax.to(butn, 1, {
      y: -40,
      opacity: 1,
      ease: Power3.easeOut,
      delay: 1
    });
  }, []);
  return (
    <div className="button">
      <button ref={el => (butn = el)} className={`${active ? active : ""}`}>
        {children}
      </button>
    </div>
  );
};
