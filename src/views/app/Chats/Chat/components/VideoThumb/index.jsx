import React, { useEffect, useRef } from "react";

import "./styles.css";

const VideoThumb = ({ videoSrc }) => {
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

    // video.onloadeddata = function () {

    // };
  }, [videoSrc]);

  return (
    <>
      <video ref={videoRef} src={videoSrc} hidden>
        <track default kind="captions" srcLang="en" src={videoSrc} />
      </video>
      <canvas ref={canvasRef} className="video-thumb" />
    </>
  );
};

export default VideoThumb;
