import React from "react";

import PlaySvg from "../../../../../../utils/icons/play.svg";
import PauseSvg from "../../../../../../utils/icons/pause.svg";
import useAudio from "../../../../../../utils/hooks/useAudio";

import "./styles.css";

const AudioMessage = (props) => {
  const { message } = props;

  const { audioDuration, playPause, playing } = useAudio();

  return (
    <div className="audio">
      <div className="audio__left">
        <div className="audio__wave-wrapper">
          <button className="audio__button" onClick={playPause}>
            {playing ? (
              <img src={PauseSvg} alt="" />
            ) : (
              <img src={PlaySvg} alt="" />
            )}
          </button>
          <div id="waveform" className="audio__wave" />
          {/* eslint-disable-next-line */}
          <audio id="track" src={message.body} />
        </div>
        <div className="d-flex flex-row align-items-center justify-content-space-between">
          <span className="audio__time">{audioDuration && audioDuration}</span>
          <span className="audio__sended-at">{message.timestamp}</span>
        </div>
      </div>
      <div className="audio__right">
        <div className="audio__avatar audio__avatar--sm">
          <img
            alt="Profile user information"
            src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=400x300&vertical=top"
            className="audio__avatar__img"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioMessage;
