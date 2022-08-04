import React, { useContext, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import shortid from "shortid";
import { Text, LanguageContext } from "../shared/context/Language";
import Circle from "../shared/IU/Circle";
import { useWindowDimensions } from "../shared/hooks/useWindowDimensions";
import calendar from "../assets/icons/calendar.svg";
import "./Business.css";

const Business = (props) => {
  const lang = useContext(LanguageContext);
  const { width } = useWindowDimensions();
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [third, setThird] = useState();
  const [four, setFour] = useState();
  const [five, setFive] = useState();

  useEffect(() => {
    const first =
      document.getElementById("01") &&
      document.getElementById("01").offsetHeight;
    const second =
      document.getElementById("02") &&
      document.getElementById("02").offsetHeight;
    const third =
      document.getElementById("03") &&
      document.getElementById("03").offsetHeight;
    const four =
      document.getElementById("04") &&
      document.getElementById("04").offsetHeight;
    const five =
      document.getElementById("05") &&
      document.getElementById("05").offsetHeight;

    if (width < 600) {
      setFirst(first);
      setSecond(second);
      setThird(third);
      setFour(four);
      setFive(five);
    }
  }, [width]);
  return (
    <div className="business-container" id={props.id}>
      <div className="business-header">
        <p className="section-subtitle">
          <Text tid="business-subtitle" />
        </p>
        <h2 className="section-title business-title">
          <Circle className="section-title-circle business-circle" />
          <Text tid="business-title" />
        </h2>
        <p className="section-desc business-desc text-align-justify">
          <Text tid="business-desc" />
        </p>
      </div>
      <div className="business-content">
        {lang.dictionary["business-items"] &&
          lang.dictionary["business-items"].map((val) => (
            <div className={`business-item-wrapper`} key={shortid.generate()}>
              <p className="business-item-number">{val.code}</p>
              <div className="business-item-content">
                {width < 600 && (
                  <div
                    className="business-item-line"
                    style={
                      val.code === "01"
                        ? { height: first + "px" }
                        : val.code === "02"
                        ? { height: second + "px" }
                        : val.code === "03"
                        ? { height: third + "px" }
                        : val.code === "04"
                        ? { height: four + "px" }
                        : { height: five + "px" }
                    }
                  ></div>
                )}
                {width > 600 && <div className="business-item-line"></div>}
                <div id={val.code} className="business-item-content-item">
                  <h3 className="business-item-title">{val.title}</h3>
                  <p className="business-item-desc">{val.desc}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Business;
