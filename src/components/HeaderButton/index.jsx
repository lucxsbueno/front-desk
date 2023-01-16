import React from "react";

import "./styles.css";

const HeaderButton = (props) => {
  const { onClick, children } = props;

  return (
    <button className="header__bttn" onClick={onClick}>
      {children}
    </button>
  );
};

export default HeaderButton;
