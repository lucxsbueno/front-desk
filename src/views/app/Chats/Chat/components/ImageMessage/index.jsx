import React from "react";

import notRead from "../../../../../../utils/icons/not-read.png";
import read from "../../../../../../utils/icons/read.png";

import "./styles.css";

export default function ImageMessage({
  setIndex,
  index,
  message,
  openGallery,
  setOpenGallery,
}) {
  const handleOpenGallery = () => {
    setIndex(index);
    setOpenGallery(!openGallery);
  };

  const isMe = message.user_id == 34;

  const isMessageRead = message.is_read ? read : notRead;

  const isMessageImageMe = isMe
    ? "message__image-wrapper message__image-wrapper--me"
    : "message__image-wrapper";

  return (
    // eslint-disable-next-line
    <div className={isMessageImageMe} onClick={handleOpenGallery}>
      <div className="message__image-hour d-flex">
        <span>{message.timestamp}</span>
        {isMe && (
          <img
            src={isMessageRead}
            alt="Mensagem não lida."
            className="ml-5 message__read"
          />
        )}
      </div>
      <div className="message__image-cover" />
      {/* eslint-disable-next-line */}
      <img
        src={message.body}
        alt=""
        className="message__image"
        onClick={handleOpenGallery}
      />
    </div>
  );
}
