import React from "react";

import "./styles.css";

const Tags = (props) => {
  const { children } = props;

  return (
    <div className="tags">
      {children}
    </div>
  );
};

Tags.defaultProps = {};

export default Tags;