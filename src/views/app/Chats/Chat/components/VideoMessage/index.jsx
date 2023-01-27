import React, { useRef, useEffect } from "react";

import { Clock } from "lucide-react";
import PlayButton from "../PlayButton";

import "./styles.css";
import { useState } from "react";

const VideoMessage = (props) => {
  const { videoMetadata } = props;
  const { srcUrl, time_duration, title } = videoMetadata;
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Defina a posição do quadro da miniatura (em segundos)
    video.currentTime = 5;

    // Desenhe o quadro do vídeo no canvas
    video.addEventListener(
      "seeked",
      function () {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      },
      false
    );

    video.onloadeddata = function () {
      setIsLoading(false);
    };
  }, [srcUrl]);

  return (
    <div className="message__video-wrapper">
      <PlayButton isLoading={isLoading} />
      <span className="message__video-title">{title}</span>
      <span className="message__video-time-duration">
        <Clock size={14} />
        <span>{time_duration}</span>
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
