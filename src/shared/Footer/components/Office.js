import React from "react";
import shortid from "shortid";
import { Text } from "../../context/Language";
import { Offices } from "../../../assets/Offices";

import email_icon from "../../../assets/icons/email.svg";
import location_icon from "../../../assets/icons/location.svg";
import "./Office.css";

const Office = () => {
  return (
    <div className=" office-wrapper">
      <div className=" office-content-1">
        <h5 className="footer-item-title">
          <Text tid="office" />
        </h5>
        <div className="office-items-wrapper">
          <div className="office-items">
            {Offices &&
              Offices.map((val) => (
                <div key={shortid.generate()} className="office-item">
                  <p className="city-name">
                    <img src={location_icon} alt="location" />
                    {val.city}
                  </p>
                  <p className="footer-item-text">
                    <a
                      href="#/"
                      className="footer-item-text"
                      onClick={() => (window.location = `${val.email}`)}
                    >
                      <img src={email_icon} alt="email_icon" />
                      {val.email}
                    </a>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Office;
