import React, { useState } from "react";

import AcceptChat from "./AcceptChat";
import EmojiButton from "../EmojiButton";
import { Mic, PlusSquare, Send, Trash2 } from "lucide-react";
import Pulse from "../../../../../../components/Pulse";
import SendButton from "../../../../../../components/SendButton";
import PresetsList from "../../../../../../components/PresetsList";
import HeaderButton from "../../../../../../components/HeaderButton";
import SenderTextarea from "../../../../../../components/SenderTextarea";
import useAudioRecorder from "../../../../../../utils/hooks/useAudioRecorder";

import "./styles.css";

const ChatFooter = (props) => {
  const { isNewChat } = props;
  const [openPresets, setOpenPresets] = useState(false);
  const [textMessage, setTextMessage] = useState("");

  const {
    startRecording,
    stopRecording,
    audioURL,
    isRecording
  } = useAudioRecorder();

  const handleStopRecording = () => {
    stopRecording();
    console.log(audioURL);
  };

  const handleSendMessage = () => {
    alert("Enviar outra coisa aqui...");
  };

  const handleCancelRecording = () => {
    stopRecording();
  }

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
          {isRecording && (
            <div className="chat__input d-flex flex-row align-items-center border-red h-58">
              <div className="d-flex flex-row align-items-center w-100">
                <Pulse />

                <p className="ml-5 text-red text-semi-bold">
                  Gravando áudio...
                </p>
              </div>

              <div className="d-flex flex-row align-items-center">
                <HeaderButton className="mr-5" onClick={handleCancelRecording}>
                  <Trash2 className="text-red" />
                </HeaderButton>
              </div>
            </div>
          )}

          {!isRecording && (
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
          )}

          {(isRecording || textMessage.length > 0) ? (
            <SendButton className="ml-15" onClick={isRecording ? handleStopRecording : handleSendMessage}>
              <Send size={20} />
            </SendButton>
          ) : (
            <SendButton className="ml-15" onClick={startRecording}>
              <Mic />
            </SendButton>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatFooter;
