import React from "react";
import { NavLink } from "react-router-dom";
import { Text } from "../context/Language";
import ServicePart from "./components/ServicePart";
import Office from "./components/Office";
import Contacts from "./components/Contacts";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container" id='footer'>
      <ServicePart />
      <Office />
      <Contacts />
      <NavLink to="/" className="footer-bottom-item">
        <Text tid="aggrement" />
      </NavLink>
      <NavLink to="/" className="footer-bottom-item">
        <Text tid="privacy_policy" />
      </NavLink>
    </div>
  );
};

export default Footer;
