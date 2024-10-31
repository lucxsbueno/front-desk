import React from "react";

import { Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import "./styles.css";

const SendedEmail = () => {
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
        <Mail size={46} />
      </div>

      <p className="w-275 text-center text-color text-semi-bold mb-5">
        Instruções enviadas por e-mail
      </p>

      <p className="signin__description text-center text-color">
        Verifique seu e-email. Enviamos instruções de{" "}
        <strong className="text-semi-bold">recuperação de senha</strong> para o
        seu e-mail, acesse o link e redefina a sua senha.
      </p>

      <div className="signin__footer-bttn">
        <Button onClick={goBack}>Voltar a página de login</Button>
      </div>
    </div>
  );
};

export default SendedEmail;
