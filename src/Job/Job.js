import Reacе, { useContext } from "react";
import shortid from "shortid";
import { Text, LanguageContext } from "../shared/context/Language";
import Map from "./components/Map";
import Circle from "../shared/IU/Circle";

import "./Job.css";

const Job = (props) => {
  const lang = useContext(LanguageContext);
  return (
    <div className="job-container" id={props.id}>
      <Map />
      {/* <img src={test} /> */}
      <div className="job-content-wrapper">
        <p className="section-subtitle">
          <Text tid="work-subtitle" />
        </p>
        <h2 className="section-title job-title">
          <Circle className="section-title-circle" />
          <Text tid="work-title" />
        </h2>
        <p className="section-desc job-desc text-align-justify">
          <Text tid="work-desc-1" />
        </p>
        <p className="section-desc job-desc text-align-justify">
          <Text tid="work-desc-2" />
        </p>
        <div className="job-content-items">
          {lang.dictionary["work-items"] &&
            lang.dictionary["work-items"].map((val, index) => (
              <div className="job-content-item" key={shortid.generate()}>
                <h3>0{index + 1}</h3>
                <div className="job-content-item-content">
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                  <p>{val.desc2}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Job;
