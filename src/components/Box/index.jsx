import React from "react";

import "./styles.css";

const Box = ({ children, className }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
