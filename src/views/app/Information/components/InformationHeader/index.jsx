import React from "react";

import Header from "../../../../../components/Header";

import "./styles.css";

const InformationHeader = () => {
  return (
    <Header className="header--bg-white">
      <div className="d-flex flex-row align-items-center justify-content-space-between w-100">
        <span className="text-color text-semi-bold">Informações gerais</span>
      </div>
    </Header>
  );
};

export default InformationHeader;
