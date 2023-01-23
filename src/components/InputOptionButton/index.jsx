import React from "react";

import "./styles.css";

const InputOptionButton = (props) => {
  const { children, className } = props;

  return (
    <button
      type="button"
      className={`input-option__button ${className}`.trim()}
    >
      {children}
    </button>
  );
};

export default InputOptionButton;
