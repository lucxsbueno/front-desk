import React from "react";

import "./styles.css";

const TextMessage = (props) => {
  const { children, hour } = props;

  return (
    <div className="message__text">
      <div className="message__inner-box">{children}</div>
      <span className="message__hour">{hour}</span>
    </div>
  );
};

export default TextMessage;
