import React from "react";

import "photoswipe/style.css";

import "./styles.css";

export default function ImageMessage({
  setIndex,
  index,
  message,
  openGallery,
  setOpenGallery,
}) {
  const handleOpenGallery = () => {
    setIndex(index);
    setOpenGallery(!openGallery);
  };

  return (
    // eslint-disable-next-line
    <div className="message__image-wrapper" onClick={handleOpenGallery}>
      <span className="message__image-hour">12:34</span>
      <div className="message__image-cover" />
      {/* eslint-disable-next-line */}
      <img
        src={message.body}
        alt=""
        className="message__image"
        onClick={handleOpenGallery}
      />
    </div>
  );
}
