import React from "react";

import Icon from "../../../../../../utils/icons/play.svg";

import "./styles.css";

const PlayButton = (props) => {
  const { onClick, isLoading } = props;

  return (
    <a href="/#" className="play__button" onClick={onClick}>
      {isLoading ? "Carregando..." : <img src={Icon} alt="Play button" />}
    </a>
  );
};

export default PlayButton;