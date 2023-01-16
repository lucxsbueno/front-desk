import React from "react";

import "./styles.css";

const Header = (props) => {
  const { className, children } = props;

  return <div className={`header ${className}`.trim()}>{children}</div>;
};

Header.defaultProps = {
  className: "",
};

export default Header;
