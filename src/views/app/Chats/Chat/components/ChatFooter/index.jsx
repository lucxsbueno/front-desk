import React from "react";

import EmojiButton from "../EmojiButton";
import SendButton from "../../../../../../components/SendButton";
import SenderTextarea from "../../../../../../components/SenderTextarea";
import HeaderButton from "../../../../../../components/HeaderButton";
import { MoreVertical, Send } from "lucide-react";

import "./styles.css";

const ChatFooter = () => {
  return (
    <div className="chat__footer">
      <div className="chat__input-wrapper d-flex flex-row align-items-start">
        <div className="chat__input d-flex flex-row">
          <SenderTextarea />

          <div className="d-flex flex-row align-items-start pb-3">
            <EmojiButton />

            <HeaderButton className="mr-5">
              <MoreVertical />
            </HeaderButton>
          </div>
        </div>

        <SendButton className="ml-15">
          <Send size={20} />
        </SendButton>
      </div>
    </div>
  );
};

export default ChatFooter;
