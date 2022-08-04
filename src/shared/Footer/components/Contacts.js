import React from "react";

import { Text } from "../../context/Language";


import email2 from "../../../assets/icons/email2.svg";
import work from "../../../assets/icons/work.svg";
import thick from "../../../assets/icons/thick.svg";
import watch from "../../../assets/icons/watch.svg";
import location_icon from "../../../assets/icons/location2.svg";
import "./Contacts.css";

const Contacts = () => {

  return (
    <div className="contacts-wrapper">
      <div className="contacts-content-1">
        <h5 className="footer-item-title">
          <Text tid="contacts" />
        </h5>
        <div className="contacts-items-wrapper">
          <div className='contact-item'>
            <img src={work} alt="work" />
            <p className="footer-item-text">
              <Text tid="company_name" />
            </p>
          </div>
          <div className='contact-item'>
            <img src={thick} alt="thick" />
            <p className="footer-item-text">
              <Text tid="company_id" />
            </p>
          </div>
          <div className='contact-item'>
            <img src={location_icon} alt="location_icon" />
            <p className="footer-item-text">
              <Text tid="company_address" />
            </p>
          </div>
          <div className='contact-item'>
            <img src={email2} alt="email2" />
            <p className="footer-item-text">
              <Text tid="email" />
            </p>
          </div>
          <div className='contact-item'>
            <img src={watch} alt="watch" />
            <p className="footer-item-text">
              <Text tid="schedule" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
