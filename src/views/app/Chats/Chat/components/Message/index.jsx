import React from "react";

import "./styles.css";

const Message = (props) => {
  const { children, className, message } = props;

  const isMe = message.user_id == 34 ? "message--me" : "";

  return <div className={`message ${isMe} ${className}`.trim()}>{children}</div>;
};

Message.defaultProps = {
  className: "",
};

export default Message;
