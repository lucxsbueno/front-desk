import React from "react";

import Menu from "./components/Menu";
import Header from "../../../components/Header";
import ProfileBadge from "./components/ProfileBadge";

import { Outlet } from "react-router-dom";

import "./styles.css";

const MainTemplate = () => {
  return (
    <div className="main-template">
      <div className="main-template__nav">
        <Header />

        <div className="main-template__body">
          <Menu />
        </div>

        <div className="main-template__footer">
          <ProfileBadge />
        </div>
      </div>

      <div className="main-template__content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainTemplate;
