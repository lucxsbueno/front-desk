import React from "react";

import { AlertTriangle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.css";

const NotFound = () => {
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
        <AlertTriangle size={46} />
      </div>

      <p className="w-275 text-center text-color text-semi-bold mb-5">
        Página não encontrada
      </p>

      <p className="signin__description text-center text-color">
        A página solicitada não foi encontrada, ela pode ter sido movida ou
        removida. Verifique e{" "}
        <strong className="text-semi-bold">tente novamente</strong>.
      </p>

      <div className="signin__footer-bttn">
        <Button className="w-100" onClick={goBack}>
          Voltar a página de login
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
