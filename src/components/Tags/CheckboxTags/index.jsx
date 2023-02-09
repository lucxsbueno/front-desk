import React from "react";

import "./styles.css";

const CheckboxTags = (props) => {
  const { children } = props;

  return (
    <div className="checkbox-tags">
      {children}
    </div>
  );
};

export default CheckboxTags;