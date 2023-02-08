import { Calendar, Users, Verified } from "lucide-react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import Header from "../../../components/Header";

import "./styles.css";

const MyAccount = () => {
  return (
    <div className="account">
      <Header className="header--bg-white bg-light">
        Meu perfil
      </Header>

      <div className="account__header">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10">
              <div className="account__avatar">
                <img src="https://cdn.dribbble.com/users/230875/screenshots/12163492/media/9ccf7b00b9933758d84c8f6b2bf9185f.jpg?compress=1&resize=400x300" alt="" className="account__img" />
              </div>

              <span className="account__email">vitoria.ester@viamaquinas.com.br</span>

              <div className="w-100 d-flex flex-row mb-10">
                <span className="account__name">Vitória Letícia Ester da Mota</span>

                <div className="account__verified">
                  <Verified />
                  <span className="verified__text">Ativo</span>
                </div>
              </div>

              <div className="account__badges">
                <div className="account__badge">
                  <Calendar size={24} />
                  <span className="account__badge-name">Entrou em março de 2020</span>
                </div>

                <div className="account__badge">
                  <Users size={24} />
                  <span className="account__badge-name">Entrou em março de 2020</span>
                </div>
              </div>

              <div className="account__nav">
                <ul className="account__menu">
                  <li className="account__item">
                    <NavLink to="/minha-conta" className="account__link">Histórico de ligações</NavLink>
                  </li>

                  <li>
                    <NavLink to="presets" className="account__link">Presets</NavLink>
                  </li>

                  <li>
                    <NavLink to="tags" className="account__link">Tags</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="account__body">
        <Outlet />
      </div>
    </div>
  );
};

export default MyAccount;
