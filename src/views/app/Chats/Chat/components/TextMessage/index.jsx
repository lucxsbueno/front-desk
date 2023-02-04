import React from "react";

import notRead from "../../../../../../utils/icons/not-read.png";
import read from "../../../../../../utils/icons/read.png";

import "./styles.css";

const TextMessage = (props) => {
  const { message } = props;

  const isMessageRead = message.is_read ? read : notRead;

  const isMe = message.user_id == 34;

  return (
    <div className="message__text">
      <div className="message__inner-box">{message.body}</div>
      <span className="message__hour d-flex">
        <span className="mr-5">{message.timestamp}</span>
        {isMe && (
          <img
            src={isMessageRead}
            alt="Mensagem não lida."
            className="message__read"
          />
        )}
      </span>
    </div>
  );
};

export default TextMessage;
