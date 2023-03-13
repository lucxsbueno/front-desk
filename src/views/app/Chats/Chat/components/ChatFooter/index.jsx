import React, { useState } from "react";

import AcceptChat from "./AcceptChat";
import EmojiButton from "../EmojiButton";
import SendButton from "../../../../../../components/SendButton";
import PresetsList from "../../../../../../components/PresetsList";
import HeaderButton from "../../../../../../components/HeaderButton";
import SenderTextarea from "../../../../../../components/SenderTextarea";
import { PlusSquare, Send } from "lucide-react";

import "./styles.css";

const ChatFooter = (props) => {
  const { isNewChat } = props;
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

      {isNewChat && <AcceptChat />}

      {!isNewChat && (
        <div className="chat__input-wrapper d-flex flex-row align-items-start">
          <div className="chat__input d-flex flex-row">
            <SenderTextarea
              setOpenPresets={setOpenPresets}
              textMessage={textMessage}
              setTextMessage={setTextMessage}
            />

            <div className="d-flex flex-row align-items-center">
              <EmojiButton />

              <HeaderButton className="mr-5">
                <PlusSquare />
              </HeaderButton>
            </div>
          </div>

          <SendButton className="ml-15" onClick={() => alert("Enviar")}>
            <Send size={20} />
          </SendButton>
        </div>
      )}
    </div>
  );
};

export default ChatFooter;
