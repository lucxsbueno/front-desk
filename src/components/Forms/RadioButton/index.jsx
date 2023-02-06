import React from "react";

import "./styles.css";

const RadioButton = (props) => {
  const { name, value, children } = props;

  return (
    <label>
      <input type="radio" name={name} value={value} />
      <span>{children}</span>
    </label>
  );
};

export default RadioButton;