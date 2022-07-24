import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MainHeader from "./MainHeader";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import SideMenu from "./SideMenu";

import "./MainNavigation.css";

const MainNavigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <MainHeader >
      <Logo />
      <NavLinks />
      <Hamburger
        onClick={handleToggle}
        show={navbarOpen ? "active-hamburger" : ""}
      />

      {/* <SideMenu
        style={
          navbarOpen
            ? { opacity: 1, left: 0 }
            : navbarOpen
            ? { opacity: 0, left: -60 }
            : null
        }
        onClickNavItem={handleToggle}
        onClick={handleToggle}
      /> */}
    </MainHeader>
  );
};

export default MainNavigation;
