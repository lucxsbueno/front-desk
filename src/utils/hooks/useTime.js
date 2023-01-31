import { useState } from "react";

const useTime = () => {
  const [audioDuration, setAudioDuration] = useState("");

  var timeString = "";

  const convertSecondsToCompleteTime = (duration) => {
    var hours = Math.floor(duration / 3600);

    duration = duration % 3600;

    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration % 60);

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
  }

  return { convertSecondsToCompleteTime, audioDuration };
}

export default useTime;