import React from "react";


import logo from '../../assets/images/logo.svg';
import "./Logo.css";

const Logo = (props) => {
  return (
    <div>
      <img src={logo} alt='logo' />
    </div>
  );
};

export default Logo;
