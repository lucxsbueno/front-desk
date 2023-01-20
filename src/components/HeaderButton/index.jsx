import React from "react";

import "./styles.css";

const HeaderButton = (props) => {
  const { onClick, className, children } = props;

  return (
    <button className={`header__bttn ${className}`.trim()} onClick={onClick}>
      {children}
    </button>
  );
};

export default HeaderButton;
