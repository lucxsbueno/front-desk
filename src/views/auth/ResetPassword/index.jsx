import React from "react";

import { Link, useNavigate } from "react-router-dom";

import Box from "../../../components/Box";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import "./styles.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="signin w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-chat">
      <Link onClick={goBack} className="text-color text-semi-bold">
        ← Crie uma nova senha
      </Link>

      <p className="w-275 text-center text-color">
        Sua nova senha deve ser{" "}
        <strong className="text-semi-bold">diferente</strong> das senhas usadas
        anteriormente.
      </p>

      <Box className="box--email-validate x-p-20 y-p-20 w-400-h-auto">
        <Input placeholder="Digite uma nova senha" className="mb-20" />
        <Input placeholder="Digite a senha novamente" className="mb-20" />
        <Button className="w-100">Redefinir senha</Button>
      </Box>
    </div>
  );
};

export default ResetPassword;
