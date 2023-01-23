import React from "react";

import "./styles.css";

const variants = {
  primary: "icon__bttn--primary",
  secondary: "icon__bttn--secondary",
  white: "icon__bttn--white",
};

const IconButton = (props) => {
  const { variant, onClick, children } = props;

  return (
    <button
      className={`icon__bttn ${variants[variant]}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
