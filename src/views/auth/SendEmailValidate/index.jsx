import React from "react";

import { Link, useNavigate } from "react-router-dom";

import Box from "../../../components/Box";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

import "./styles.css";

const SendEmailValidate = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="signin w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-chat">
      <Link onClick={goBack} className="text-color text-semi-bold">
        ← Redefinir senha
      </Link>

      <p className="w-275 text-center text-color">
        insira o e-mail associado à sua conta e{" "}
        <strong className="text-semi-bold">enviaremos</strong> um e-mail com{" "}
        <strong className="text-semi-bold">instruções</strong> para redefinir
        sua senha
      </p>

      <Box className="box--email-validate x-p-20 y-p-20 w-400-h-auto">
        <Input placeholder="Endereço de e-mail" className="mb-20" />
        <Button>Enviar instruções</Button>
      </Box>
    </div>
  );
};

export default SendEmailValidate;
