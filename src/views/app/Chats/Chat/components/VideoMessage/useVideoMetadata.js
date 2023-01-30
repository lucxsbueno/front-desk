import { useState, useEffect } from "react";

const useVideoMetadata = ({ videoRef, canvasRef, srcUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [timeDuration, updateTimeDuration] = useState("");
  let timeString = "";

  const openFullScreen = (e) => {
    e.preventDefault();
    videoRef.current.requestFullscreen();
    videoRef.current.style.hidden = false;
  }

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

      var duration = video.duration;
      var hours = Math.floor(duration / 3600);

      duration = duration % 3600;

      var minutes = Math.floor(duration / 60);
      var seconds = Math.floor(duration % 60);

      if (hours > 0) {
        timeString += hours.toString().padStart(2, "0") + ":";
      }

      timeString += [minutes, seconds].map(function (x) {
        return x.toString().padStart(2, "0");
      }).join(":");

      updateTimeDuration(timeString);
    };
  }, [srcUrl]);

  return { timeDuration, openFullScreen, isLoading };
};

export default useVideoMetadata;