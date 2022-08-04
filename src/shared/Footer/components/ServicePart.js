import React, { useContext } from "react";
import shortid from "shortid";
import { NavLink } from "react-router-dom";
import { Text, LanguageContext } from "../../context/Language";
import "./ServicePart.css";

const ServicePart = () => {
  const lang = useContext(LanguageContext);
  return (
    <div className="servicepart-wrapper">
      <div className="servicepart-content-1">
        <h5 className="footer-item-title">
          <Text tid="service-title" />
        </h5>
        <ul className="servicepart-below-items">
          {lang.dictionary["service-menu"] &&
            lang.dictionary["service-menu"].map((val) => (
              <li key={shortid.generate()} className={"footer-item-text"}>
                {val.title}
              </li>
            ))}
          <ul className="servicepart-bottom-items">
            {lang.dictionary["service-customs-menu"] &&
              lang.dictionary["service-customs-menu"].map((val) => (
                <li className="footer-item-text" key={shortid.generate()}>
                  {val.title}
                </li>
              ))}
          </ul>
        </ul>
      </div>
      <div className="servicepart-content-2">
        <h5 className="footer-item-title">
          <Text tid="groupage-cargo-title" />
        </h5>
        <ul className="servicepart-below-items">
          {lang.dictionary["groupage-cargo-items"] &&
            lang.dictionary["groupage-cargo-items"].map((val) => (
              <li key={shortid.generate()} >
                <NavLink className={"footer-item-text"} to='/'>{val.title}</NavLink>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicePart;
