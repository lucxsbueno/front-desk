import React, { useState } from "react";

import EmojiButton from "../EmojiButton";
import SendButton from "../../../../../../components/SendButton";
import SenderTextarea from "../../../../../../components/SenderTextarea";
import HeaderButton from "../../../../../../components/HeaderButton";
import PresetsList from "../../../../../../components/PresetsList";
import { MoreVertical, Send } from "lucide-react";

import "./styles.css";

const ChatFooter = () => {
  // Para não esquecer: estou mandando a props "isNewChat"
  // para quando precisar saber se é um chat novo ou não
  const [openPresets, setOpenPresets] = useState(false);
  const [textMessage, setTextMessage] = useState("");

  return (
    <div className="chat__footer">
      {openPresets && (
        <PresetsList
          textMessage={textMessage}
          setTextMessage={setTextMessage}
          openPresets={openPresets}
          setOpenPresets={setOpenPresets}
        />
      )}

      <div className="chat__input-wrapper d-flex flex-row align-items-start">
        <div className="chat__input d-flex flex-row">
          <SenderTextarea
            setOpenPresets={setOpenPresets}
            textMessage={textMessage}
            setTextMessage={setTextMessage}
          />

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
