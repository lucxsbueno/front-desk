import React from "react";

import "./styles.css";

const Checkbox = (props) => {
  const { label } = props;

  return (
    <label className="checkbox">{label}
      <input type="checkbox" />
      <span className="checkmark"></span>
    </label>
  );
};

Checkbox.defaultProps = {
  label: ""
}

export default Checkbox;