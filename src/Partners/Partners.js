import React from "react";

import { Text } from "../shared/context/Language";
import Circle from "../shared/IU/Circle";
import Carousel from "../shared/IU/Carousel";

import "./Partners.css";

const Partners = () => {

  return (
    <div className="partners-container">
      <div className="partners-header">
        <p className="section-subtitle">
          <Text tid="partners-subtitle" />
        </p>
        <h2 className="section-title partners-title">
          <Circle className="section-title-circle partners-circle" />
          <Text tid="partners-title" />
        </h2>
      </div>
      <div className="partners-items">
        <Carousel>
          <div className="partner-wrapper partner1"></div>
          <div className="partner-wrapper partner2"></div>
          <div className="partner-wrapper partner3"></div>
          <div className="partner-wrapper partner4"></div>
          <div className="partner-wrapper partner5"></div>
          <div className="partner-wrapper partner6"></div>
        </Carousel>
      </div>
    </div>
  );
};

export default Partners;
