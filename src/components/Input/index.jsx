import React from "react";

import "./styles.css";

const variants = {
  search: "form__input form__input--search",
};

const Input = (props) => {
  const { type, placeholder, variant } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={variants[variant]}
    />
  );
};

export default Input;
