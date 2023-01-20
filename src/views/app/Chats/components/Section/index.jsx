import React from "react";

import "./styles.css";

const Section = (props) => {
  const { title, length, children } = props;

  return (
    <div className="chat__section">
      <div className="chat__heading">
        <h2 className="chat__title">{title}</h2>
        <h2 className="chat__title">{length}</h2>
      </div>

      <div className="chat__items">{children}</div>
    </div>
  );
};

Section.defaultProps = {
  title: "Item item item",
  length: "",
};

export default Section;
