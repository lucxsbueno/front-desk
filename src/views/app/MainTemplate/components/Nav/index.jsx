import React from "react";

import "./styles.css";

const Nav = props => {
  const { children } = props;

  return (
    <ul className="main-template__nav-menu">
      {children}
    </ul>
  );
}

export default Nav;