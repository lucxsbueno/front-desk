import React from "react";

import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/Header";
import HeaderButton from "../../../components/HeaderButton";
import Input from "../../../components/Input";

import "./styles.css";

const SearchMessages = () => {
  const navigate = useNavigate();

  return (
    <div className="search">
      <Header className="header--bg-white">
        <div className="d-flex flex-row align-items-center justify-content-space-between w-100">
          <div className="d-flex flex-row align-items-center">
            <HeaderButton className="mr-10" onClick={() => navigate(-1)}>
              <ChevronLeft />
            </HeaderButton>

            <span className="text-color text-semi-bold">
              Pesquisar mensagem
            </span>
          </div>
        </div>
      </Header>

      <div className="x-p-15 y-p-10">
        <Input type="text" variant="search" placeholder="Pesquisar" />
      </div>

      <div className="search__body" />
    </div>
  );
};

export default SearchMessages;
