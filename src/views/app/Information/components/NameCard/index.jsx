import React from "react";

import { Edit2 } from "lucide-react";

import "./styles.css";
import IconButton from "../../../../../components/IconButton";

const NameCard = (props) => {
  const { name, pic } = props;

  return (
    <div className="x-p-15 y-p-15">
      <div className="info-picture">
        <div className="info-picture__picture-wrapper">
          <div className="info-picture__bg-edit">
            <IconButton variant="white" onClick={() => alert("Olá")}>
              <Edit2 size={20} />
            </IconButton>
          </div>
          <img src={pic} alt="" className="info-picture__img" />
        </div>

        <div className="info-picture__name-wrapper">
          <span className="info-picture__name">{name}</span>

          <div className="info-picture__social-medias">
            <span className="info-picture__social-media">WhatsApp</span>

            <span className="info-picture__social-media">Telegram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameCard;
