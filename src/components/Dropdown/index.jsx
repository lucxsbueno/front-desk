import React from "react";

import "./styles.css";

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      {props.button}
      <ul className="dropdown__nav">{props.children}</ul>
    </div>
  );
};

export default Dropdown;
