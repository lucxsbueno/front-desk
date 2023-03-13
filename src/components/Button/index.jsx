import React from "react";
import Loader from "../Loader";

import "./styles.css";

const variants = {
  green: "form__bttn--green",
  red: "form__bttn--red",
};

const Button = (props) => {
  const { onClick, children, className, category, variant, loading, disabled } =
    props;

  return (
    <button
      disabled={disabled || loading}
      className={`form__bttn ${variants[variant]} ${className} ${category}`.trim()}
      onClick={onClick}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  variant: "",
  category: "",
};

export default Button;
