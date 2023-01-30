import React, { useState } from "react";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

import "./styles.css";

const SliderGallery = ({
  index,
  setIndex,
  openGallery,
  setOpenGallery,
  gallery,
}) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const prev = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(gallery.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex === gallery.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const close = () => {
    setOpenGallery(!openGallery);
    setIndex(0);
  };

  return (
    openGallery && (
      <div className="slider">
        <button className="slider__bttns slider__bttns--close" onClick={close}>
          <X />
        </button>

        <button className="slider__bttns slider__bttns--prev" onClick={prev}>
          <ChevronLeft />
        </button>

        <button className="slider__bttns slider__bttns--next" onClick={next}>
          <ChevronRight />
        </button>

        <div className="slider__wrapper-img-video">
          {gallery[currentIndex].type == "image" ? (
            <img
              src={gallery[currentIndex].body}
              alt=""
              className="slider__img"
            />
          ) : (
            <video
              src={gallery[currentIndex].body.srcUrl}
              controls
              className="slider__video"
              autoPlay={true}
              loop={true}
            >
              <track
                default
                kind="captions"
                srcLang="en"
                src={gallery[currentIndex].body.srcUrl}
              />
            </video>
          )}
        </div>
      </div>
    )
  );
};

export default SliderGallery;
