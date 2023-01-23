import React from "react";

import SendButton from "../../../../../../components/SendButton";
import SenderTextarea from "../../../../../../components/SenderTextarea";
import HeaderButton from "../../../../../../components/HeaderButton";

import { MoreVertical, Send, Smile } from "lucide-react";

import "./styles.css";

const Footer = () => {
  return (
    <div className="chat__footer">
      {/* Input */}
      <div className="chat__input-wrapper d-flex flex-row align-items-start">
        <div className="chat__input d-flex flex-row">
          <SenderTextarea />

          <div className="d-flex flex-row align-items-start pb-3">
            <HeaderButton className="ml-5 mr-5">
              <Smile />
            </HeaderButton>

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

export default Footer;
