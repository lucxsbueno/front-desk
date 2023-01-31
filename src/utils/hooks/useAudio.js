import { useState, useEffect, useRef, useCallback } from "react";

import WaveSurfer from "wavesurfer.js";

const useAudio = () => {
  const waveform = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [audioDuration, setAudioDuration] = useState("");

  var timeString = "";

  const createAudioElement = useCallback(() => {
    const track = document.querySelector("#track");

    waveform.current = WaveSurfer.create({
      barWidth: 3,
      barRadius: 3,
      barGap: 2,
      barMinHeight: 1,
      cursorWidth: 1,
      container: "#waveform",
      backend: "WebAudio",
      height: 60,
      progressColor: "#FE6E00",
      responsive: true,
      waveColor: "#C4C4C4",
      cursorColor: "transparent",
    });

    waveform.current.load(track);

    waveform.current.on("ready", () => {
      // eslint-disable-next-line
      timeString = "";

      let totalTime = waveform.current.getDuration();
      let currentTime = waveform.current.getCurrentTime();
      let remainingTime = totalTime - currentTime;

      var hours = Math.floor(remainingTime / 3600);

      remainingTime = remainingTime % 3600;

      var minutes = Math.floor(remainingTime / 60);
      var seconds = Math.floor(remainingTime % 60);

      if (hours > 0) {
        timeString += hours.toString().padStart(2, "0") + ":";
      }

      // eslint-disable-next-line
      timeString += [minutes, seconds]
        .map(function (x) {
          return x.toString().padStart(2, "0");
        })
        .join(":");

      setAudioDuration(timeString);
    });

    waveform.current.on("finish", () => {
      setPlaying(false);

      waveform.current.stop();

      timeString = "";

      let totalTime = waveform.current.getDuration();
      let currentTime = waveform.current.getCurrentTime();
      let remainingTime = totalTime - currentTime;

      var hours = Math.floor(remainingTime / 3600);

      remainingTime = remainingTime % 3600;

      var minutes = Math.floor(remainingTime / 60);
      var seconds = Math.floor(remainingTime % 60);

      if (hours > 0) {
        timeString += hours.toString().padStart(2, "0") + ":";
      }

      // eslint-disable-next-line
      timeString += [minutes, seconds]
        .map(function (x) {
          return x.toString().padStart(2, "0");
        })
        .join(":");

      setAudioDuration(timeString);
    });
  }, []);

  useEffect(() => {
    createAudioElement();
  }, [createAudioElement]);

  useEffect(() => {
    waveform.current.on("audioprocess", () => {
      // eslint-disable-next-line
      timeString = "";

      let totalTime = waveform.current.getDuration();
      let currentTime = waveform.current.getCurrentTime();
      let remainingTime = totalTime - currentTime;

      var hours = Math.floor(remainingTime / 3600);

      remainingTime = remainingTime % 3600;

      var minutes = Math.floor(remainingTime / 60);
      var seconds = Math.floor(remainingTime % 60);

      if (hours > 0) {
        timeString += hours.toString().padStart(2, "0") + ":";
      }

      // eslint-disable-next-line
      timeString += [minutes, seconds]
        .map(function (x) {
          return x.toString().padStart(2, "0");
        })
        .join(":");

      setAudioDuration(timeString);
    });
  }, []);

  const playPause = () => {
    let context = new AudioContext();

    context.resume();

    setPlaying(!playing);
    waveform.current.playPause();
  };

  return { audioDuration, playPause, playing };
};

export default useAudio;
