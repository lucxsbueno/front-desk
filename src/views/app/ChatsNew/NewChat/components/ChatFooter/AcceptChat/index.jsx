import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../../../../../../../components/Button";

const AcceptChat = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const acceptChat = () => {
    setLoading(!loading);
  };

  return (
    <div className="accept__chat">
      <div className="accept__chat__wrapper w-100 d-flex flex-row align-items-center justify-content-space-between">
        <div className="accept__chat__left">
          <p className="text-color text-semi-bold">
            Esta é uma nova conversa. ✨
          </p>
          <p className="text-color">Deseja prosseguir com o atendimento?</p>
        </div>

        <div className="accept__chat__right d-flex flex-row">
          <Button
            disabled={loading}
            className="mr-15 accept__cancel-bttn"
            variant="red"
            category="transparent"
            onClick={goBack}
          >
            Cancelar
          </Button>

          <Button
            className="accept__accept-bttn"
            variant="green"
            loading={loading}
            onClick={acceptChat}
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AcceptChat;
