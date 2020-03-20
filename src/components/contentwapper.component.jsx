import React from "react";

const Contentwapper = props => {
  return (
    <div className="fetures">
      <div className="center-content">
        <div className="flex">{props.children}</div>
      </div>
    </div>
  );
};
export default Contentwapper;
