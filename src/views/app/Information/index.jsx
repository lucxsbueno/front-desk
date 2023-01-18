import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../../../components/Header";

import "./styles.css";

const Information = () => {
  const location = useLocation();

  return (
    <div className="information">
      <Header className="header--bg-white">
        <div className="d-flex flex-row align-items-center justify-content-space-between w-100">
          <span className="text-color text-semi-bold">Informações gerais</span>
        </div>
      </Header>

      <div className="x-p-20 y-p-20">
        <p>{location.state.data.id}</p>
        <p>{location.state.data.title}</p>
      </div>
    </div>
  );
}

export default Information;