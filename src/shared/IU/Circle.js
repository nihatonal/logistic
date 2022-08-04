import React from "react";

import "./Circle.css";

const Circle = (props) => {
  return (
    <div className={`circle-wrapper ${props.className}`} style={props.styleCircle} >
      <div className="circle-item"></div>
      <div className="circle-item" style={props.style}></div>
    </div>
  );
};

export default Circle;
