import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";
const NavLinks = (props) => {
  return (
    <div className={`nav-wrapper ${props.className}`}>
      <NavLink
        className="nav-item"
        to="/aboutus"
        activeclassname="selected"
        onClick={props.onClickNavItem}
      >
        О нас
      </NavLink>
      <NavLink
        className="nav-item"
        to="/services"
        activeclassname="selected"
        onClick={props.onClickNavItem}
      >
        Услуги
      </NavLink>
      <NavLink
        className="nav-item"
        to="/internationaltransport"
        activeclassname="selected"
        onClick={props.onClickNavItem}
      >
        Международные перевозки
      </NavLink>
      <NavLink
        className="nav-item"
        to="/businesssolved"
        activeclassname="selected"
        onClick={props.onClickNavItem}
      >
        Решение для бизнеса
      </NavLink>
      <NavLink
        className="nav-item"
        to="/consolidatedcargo"
        activeclassname="selected"
        onClick={props.onClickNavItem}
      >
        Сборные грузы
      </NavLink>
    </div>
  );
};

export default NavLinks;
