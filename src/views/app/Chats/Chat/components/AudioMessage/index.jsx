import React from "react";

import PlaySvg from "../../../../../../utils/icons/play.svg";
import PlayWhiteSvg from "../../../../../../utils/icons/play_white.svg";
import PauseSvg from "../../../../../../utils/icons/pause.svg";
import PauseWhiteSvg from "../../../../../../utils/icons/pause_white.svg";
import useAudio from "../../../../../../utils/hooks/useAudio";

import "./styles.css";

const AudioMessage = (props) => {
  const { message } = props;

  const audioId = message.id;
  const userId = message.user_id;

  const { audioDuration, playPause, playing } = useAudio(audioId, userId);

  const playSvg = message.user_id == 34 ? PauseWhiteSvg : PauseSvg;
  const pauseSvg = message.user_id == 34 ? PlayWhiteSvg : PlaySvg;

  const isMe = message.user_id == 34 ? "audio--me" : "";

  return (
    <div className={`audio ${isMe}`.trim()}>
      <div className="audio__left">
        <div className="audio__wave-wrapper">
          <button className="audio__button" onClick={playPause}>
            {playing ? (
              <img src={playSvg} alt="" />
            ) : (
              <img src={pauseSvg} alt="" />
            )}
          </button>
          <div id={`waveform-${message.id}`} className="audio__wave" />
          {/* eslint-disable-next-line */}
          <audio id={`track-${message.id}`} src={message.body} />
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
