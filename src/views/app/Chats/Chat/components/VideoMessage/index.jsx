import React, { useRef } from "react";

import "./styles.css";

import PlayButton from "../PlayButton";
import useVideoMetadata from "./useVideoMetadata";
import notRead from "../../../../../../utils/icons/not-read.png";
import read from "../../../../../../utils/icons/read.png";

const VideoMessage = (props) => {
  const {
    videoMetadata,
    message,
    index,
    setIndex,
    openGallery,
    setOpenGallery,
  } = props;
  const { srcUrl, title } = videoMetadata;

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const { timeDuration, isLoading } = useVideoMetadata({
    videoRef,
    canvasRef,
    srcUrl,
  });

  const isMe = message.user_id == 34;
  const isMessageRead = message.is_read ? read : notRead;

  const handleOpenGallery = (e) => {
    e.preventDefault();
    setIndex(index);
    setOpenGallery(!openGallery);
  };

  const isMessageVideoMe = isMe
    ? "message__video-wrapper message__video-wrapper--me"
    : "message__video-wrapper";

  return (
    // eslint-disable-next-line
    <div className={isMessageVideoMe} onClick={handleOpenGallery}>
      {/* eslint-disable-next-line */}
      <PlayButton isLoading={isLoading} onClick={handleOpenGallery} />

      <span className="message__video-title">{title}</span>

      <span className="message__video-time-duration">
        <span>{timeDuration}</span>
      </span>

      <div className="d-flex flex-row">
        <span className="message__video-hour mr-5">{message.timestamp}</span>
        {isMe && (
          <img
            src={isMessageRead}
            alt="Mensagem não lida."
            className="message__read"
          />
        )}
      </div>

      <div className="message__video-cover" />

      <video ref={videoRef} src={srcUrl} hidden>
        <track default kind="captions" srcLang="en" src={srcUrl} />
      </video>

      <canvas ref={canvasRef} className="video-thumb" />
    </div>
  );
};

export default VideoMessage;
