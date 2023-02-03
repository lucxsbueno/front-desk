import React from "react";

import "./styles.css";

const InputLabel = (props) => {
  const { children, label, className } = props;

  return (
    <label className={`label ${className}`.trim()}>
      <p className="input__label">{label}</p>
      {children}
    </label>
  );
};

InputLabel.defaultProps = {
  label: "",
  children: "",
  className: ""
};

export default InputLabel;