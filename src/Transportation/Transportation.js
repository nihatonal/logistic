import React, { useContext, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import shortid from "shortid";
import { Text, LanguageContext } from "../shared/context/Language";
import Circle from "../shared/IU/Circle";

import { useWindowDimensions } from "../shared/hooks/useWindowDimensions";
import calendar from "../assets/icons/calendar.svg";
import "./Transportation.css";

const Transportation = (props) => {
  const { width } = useWindowDimensions();
  const lang = useContext(LanguageContext);
  const [air, setAir] = useState();
  const [sea, setSea] = useState();
  const [auto, setAuto] = useState();
  const [railway, setRailway] = useState();

  useEffect(() => {
    const air =
      document.getElementById("air") &&
      document.getElementById("air").offsetHeight;
    const sea =
      document.getElementById("sea") &&
      document.getElementById("sea").offsetHeight;
    const auto =
      document.getElementById("auto") &&
      document.getElementById("auto").offsetHeight;
    const railway =
      document.getElementById("auto") &&
      document.getElementById("wait").offsetHeight;

    if (width < 600) {
      setAir(air);
      setAuto(auto);
      setSea(sea);
      setRailway(railway);
    }
    console.log(air);
  }, [width]);

  return (
    <div className="transportation-container" id={props.id}>
      <div className="transportation-header">
        <p className="section-subtitle">
          <Text tid="transportation-subtitle" />
        </p>
        <h2 className="section-title transportation-title">
          <Circle className="section-title-circle transportation-circle" />
          <Text tid="transportation-title" />
        </h2>
        <p className="section-desc">
          <Text tid="transportation-desc" />
        </p>
      </div>
      <div className="transportation-content">
        {lang.dictionary["transportation-items"] &&
          lang.dictionary["transportation-items"].map((val) => (
            <div
              className={`transportation-item-wrapper ${val.id}bg`}
              key={shortid.generate()}
              style={
                width < 600 && val.id === "air"
                  ? { marginBottom: air + "px" }
                  : width < 600 && val.id === "sea"
                  ? { marginBottom: sea + "px" }
                  : width < 600 && val.id === "auto"
                  ? { marginBottom: auto + "px" }
                  : { marginBottom: railway + "px" }
              }
            >
              <div className="transportation-item-date">
                <ReactSVG src={calendar} />
                <p>{val.time}</p>
              </div>
              <h3 className="transportation-item-title-mobile">{val.title}</h3>
              <div className="transportation-item-content" id={val.id}>
                <h3 className="transportation-item-title">{val.title}</h3>
                <p className="transportation-item-desc">{val.desc}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Transportation;
