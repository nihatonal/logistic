import React from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import "./SideMenu.css";

const SideMenu = (props) => {
  return (
    <div className="side-menu-wrapper" style={props.style}>
      <NavLinks className="side-menu-navlinks" onClickNav={props.onClickNav} onClickNavItem={props.onClickNavItem} />
      <NavLink className="btn-appointment_mobile" to="/appointment" onClick={props.onClickNavItem}>
        Appointment
      </NavLink>
    </div>
  );
};

export default SideMenu;
