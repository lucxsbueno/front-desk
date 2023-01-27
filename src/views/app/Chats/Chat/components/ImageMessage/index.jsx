import React, { useEffect } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

import "./styles.css";

export default function ImageMessage(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={props.galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <div className="message__image-wrapper">
            <span className="message__image-hour">12:34</span>
            <div className="message__image-cover" />
            <img src={image.thumbnailURL} alt="" className="message__image" />
          </div>
        </a>
      ))}
    </div>
  );
}
