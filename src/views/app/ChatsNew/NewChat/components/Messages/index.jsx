import React from "react";

import "./styles.css";

const Messages = (props) => {
  return <div className="messages">{props.children}</div>;
};

export default Messages;
