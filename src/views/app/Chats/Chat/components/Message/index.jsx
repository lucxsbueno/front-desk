import React from "react";

import "./styles.css";

const Message = (props) => {
  const { children, className } = props;

  return (
    <div className={`message ${className}`.trim()}>
      {children}
    </div>
  );
};

Message.defaultProps = {
  className: ""
};

export default Message;