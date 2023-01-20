import React from "react";

import "./styles.css";

const Switch = (props) => {
  const { label } = props;

  return (
    <label className="form-switch">
      <input type="checkbox" />
      <i /> {label}
    </label>
  );
};

export default Switch;
