import React from "react";
import { Link } from "react-router-dom";

import Box from "../../../components/Box";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import "./styles.css";

const Signin = () => {
  return (
    <div className="signin w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-chat">
      <span className="logo logo--lg">
        front<span className="logo__primary">desk</span>
      </span>

      <Box className="box--signin x-p-20 y-p-20 w-400-h-auto">
        <Input placeholder="Endereço de e-mail" className="mb-20" />
        <Input
          type="password"
          placeholder="Senha de acesso"
          className="mb-20"
        />
        <Button className="w-100">Acessar conta</Button>
      </Box>

      <Link
        to="esqueci-minha-senha"
        className="signin__link mt-15 mb-100 text-color"
      >
        Esqueci minha senha
      </Link>
    </div>
  );
};

export default Signin;
