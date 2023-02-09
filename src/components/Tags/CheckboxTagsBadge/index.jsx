import React from "react";

import Checkbox from "../../Forms/Checkbox";

import "./styles.css";

const CheckboxTagsBadge = (props) => {
  const { tag } = props;

  return (
    <div className="checkbox-tag">
      <Checkbox />
      <span className="checkbox-tag__name">#{tag.name}</span>
    </div>
  );
};

CheckboxTagsBadge.defaultProps = {
  tag: "",
};

export default CheckboxTagsBadge;
