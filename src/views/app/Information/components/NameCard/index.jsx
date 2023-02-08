import React from "react";

import { useNavigate } from "react-router-dom";
import IconButton from "../../../../../components/IconButton";

import { Edit2 } from "lucide-react";

import "./styles.css";

const NameCard = (props) => {
  const { userData } = props;

  const navigate = useNavigate();

  const goToEditPage = () => {
    navigate("/conversas/" + userData.id + "/editar-cliente", {
      state: { data: userData },
    });
  };

  return (
    <div className="x-p-15 y-p-15">
      <div className="info-picture">
        <div className="info-picture__picture-wrapper">
          <div className="info-picture__bg-edit">
            <IconButton variant="white" onClick={goToEditPage}>
              <Edit2 size={20} />
            </IconButton>
          </div>
          <img
            src={userData.profile_picture}
            alt=""
            className="info-picture__img"
          />
        </div>

        <div className="info-picture__name-wrapper">
          <span className="info-picture__name">{userData.title}</span>

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
