import React from "react";

import "./styles.css";

const Box = ({ children, className, onClick }) => {
  return (
    //eslint-disable-next-line
    <div className={`box ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Box;
