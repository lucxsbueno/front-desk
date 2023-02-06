import React from "react";

import "./styles.css";

const Textarea = (props) => {
  const { className, rows } = props;

  return (
    <textarea className={`textarea ${className}`.trim()} rows={rows} />
  );
};

Textarea.defaultProps = {
  className: ""
};

export default Textarea;