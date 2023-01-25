import React from "react";

import "./styles.css";

const DropdownButtonMessage = (props) => {
  const { children } = props;

  return (
    <button className="dropdown__bttn-message">
      {children}
    </button>
  );
};

export default DropdownButtonMessage;