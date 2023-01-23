import React from "react";

import "./styles.css";

const SendButton = (props) => {
  const { children, onClick, className } = props;

  return (
    <button className={`send__button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default SendButton;
