import React from "react";

import "./styles.css";

const CardGrid = props => {
  const { className } = props;

  return (
    <div className={`grid-column-4 ${className}`.trim()}>
      {props.children}
    </div>
  );
}

export default CardGrid;