import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  return <header className={`header content_wrapper ${props.className}`}>{props.children}</header>;
};

export default MainHeader;
