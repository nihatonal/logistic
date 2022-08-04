import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MainHeader from "./MainHeader";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import SideMenu from "./SideMenu";

import LanguageSelector from "../../shared/IU/LanguageSelector";
import Circle from "../../shared/IU/Circle";
import logo from "../../assets/images/logo.svg";
import logo_menu from "../../assets/images/logo_menu.svg";
import logo_mobile from "../../assets/images/logo_mobile.svg";
import logo_mobile_menu from "../../assets/images/logo_mobile_menu.svg";
import "./MainNavigation.css";

const MainNavigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [change, setChange] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
    setMenuOpen(!menuOpen);
    setTimeout(() => {
      setChange(!change);
    }, 50);
  };

  return (
    <MainHeader>
      <Logo
        logo={!navbarOpen ? logo : logo_menu}
        logo_mobile={!navbarOpen ? logo_mobile : logo_mobile_menu}
      />
      <NavLinks />
      <p style={change ? { color: "#fff" } : null} className="phone-number">
        +7 499 350 10 12
      </p>
      <div className="menu-btn-items">
        <LanguageSelector style={change ? { color: "#fff" } : null} />
        <div className="menu-btn" onClick={handleToggle}>
          <Circle style={menuOpen ? { backgroundColor: "#4DDF19" } : null} />
          <p style={change ? { color: "#fff" } : null}>
            {!change ? "Меню" : "Закрыть"}
          </p>
        </div>
      </div>

      <Hamburger
        onClick={handleToggle}
        show={navbarOpen ? "active-hamburger" : ""}
      />

      <SideMenu
        style={
          navbarOpen
            ? { opacity: 1, top: 0 }
            : navbarOpen
            ? { opacity: 0, top: -4000 }
            : null
        }
        onClickNavItem={handleToggle}
        onClick={handleToggle}
      />
    </MainHeader>
  );
};

export default MainNavigation;
