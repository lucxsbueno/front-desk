import React from "react";

import "./styles.css";

const Button = (props) => {
  const { onClick, children, className } = props;

  return (
    <button className={`form__bttn ${className}`.trim()} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
};

export default Button;
