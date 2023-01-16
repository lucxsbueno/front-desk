import React from "react";

import "./styles.css";

const Button = (props) => {
  const { onClick, children } = props;

  return (
    <button className="form__bttn" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
