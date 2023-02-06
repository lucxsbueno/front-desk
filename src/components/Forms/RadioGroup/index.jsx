import React from "react";

import "./styles.css";

const RadioGroup = (props) => {
  const { className, children } = props;

  return (
    <div className={`radio__group ${className}`.trim()}>
      {children}
    </div>
  );
};

RadioGroup.defaultProps = {
  className: ""
};

export default RadioGroup;