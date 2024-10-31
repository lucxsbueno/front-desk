import React from "react";

import "./styles.css";

const ChatIndex = () => {
  return (
    <div className="w-100 h-100 d-flex flex-row align-items-center justify-content-center">
      <div className="d-flex flex-column align-items-center">
        <div className="chat-img" />
        <span className="logo logo--lg">
          front<span className="logo__primary">desk</span>
        </span>
        <p className="logo__p">
          Escolha uma conversa para começar ou inicie uma nova conversa
        </p>
      </div>
    </div>
  );
};

export default ChatIndex;
