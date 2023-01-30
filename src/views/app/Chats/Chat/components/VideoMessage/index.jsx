import React, { useRef } from "react";

import PlayButton from "../PlayButton";

import "./styles.css";
import useVideoMetadata from "./useVideoMetadata";

const VideoMessage = (props) => {
  const { videoMetadata, index, setIndex, openGallery, setOpenGallery } = props;
  const { srcUrl, title } = videoMetadata;

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const { timeDuration, isLoading } = useVideoMetadata({
    videoRef,
    canvasRef,
    srcUrl,
  });

  const handleOpenGallery = (e) => {
    e.preventDefault();
    setIndex(index);
    setOpenGallery(!openGallery);
  };

  return (
    // eslint-disable-next-line
    <div className="message__video-wrapper" onClick={handleOpenGallery}>
      {/* eslint-disable-next-line */}
      <PlayButton isLoading={isLoading} onClick={handleOpenGallery} />

      <span className="message__video-title">{title}</span>

      <span className="message__video-time-duration">
        <span>{timeDuration}</span>
      </span>

      <span className="message__video-hour">12:34</span>

      <div className="message__video-cover" />

      <video ref={videoRef} src={srcUrl} hidden>
        <track default kind="captions" srcLang="en" src={srcUrl} />
      </video>

      <canvas ref={canvasRef} className="video-thumb" />
    </div>
  );
};

export default VideoMessage;
