import React from "react";

import "./styles.css";

const Input = (props) => {
  const { type, placeholder, variant, className } = props;

  const isSearch = variant === "search" ? "input--search" : "";

  return (
    <div className="w-100">
      <input
        type={type}
        className={`input ${className} ${isSearch}`.trim()}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.defaultProps = {
  notErrorMessage: false,
  className: "",
  disabled: false,
};

export default Input;
