import React from "react";

import { AlertOctagon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.css";

const InvalidToken = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="signin w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-chat">
      <Link onClick={goBack} className="text-color text-semi-bold">
        ← frontdesk
      </Link>

      <div className="signin__icon">
        <AlertOctagon size={46} />
      </div>

      <p className="w-275 text-center text-color text-semi-bold mb-5">
        Token inválido
      </p>

      <p className="signin__description text-center text-color">
        O token fornecido expirou ou é inválido.{" "}
        <strong className="text-semi-bold">Tente novamente</strong> clicando no
        link enviado por e-mail.
      </p>

      <div className="signin__footer-bttn">
        <Button className="w-100" onClick={goBack}>
          Voltar a página de login
        </Button>
      </div>
    </div>
  );
};

export default InvalidToken;
