import React from "react";

import "./styles.css";

const Header = props => {
  const { children } = props;

  return (
    <div className="header">
      {children}
    </div>
  );
}

export default Header;