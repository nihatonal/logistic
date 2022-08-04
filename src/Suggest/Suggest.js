import React from "react";

import { Text, LanguageContext } from "../shared/context/Language";

import Circle from "../shared/IU/Circle";
//<Text tid="form-desc" />

import bg from "../assets/images/suggestbg.svg";
import "./Suggest.css";

const Suggest = (props) => {
  return (
    <div className="suggest-container" id={props.id}>
      <img className="suggest_bg" src={bg} alt="bg" />
      <div className="suggest-content">
        <p className="section-subtitle">
          <Text tid="suggest-subtitle" />
        </p>
        <h2 className="section-title suggest-title">
          <Circle className="section-title-circle suggest-circle" />
          <Text tid="suggest-title" />
        </h2>
        <div className="suggest-desc-wrapper">
          <p className="section-desc suggest-desc text-align-justify">
            <Text tid="suggest-desc" />
            <br></br> <Text tid="suggest-desc2" />
          </p>
          <p className="section-desc suggest-desc text-align-justify">
            <Text tid="suggest-desc3" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Suggest;
