import React from "react";

import Menu from "./components/Menu";
import Header from "../../../components/Header";
import ProfileBadge from "./components/ProfileBadge";

import "./styles.css";

const MainTemplate = () => {
  return (
    <div className="main-template">
      <div className="main-template__nav">
        <Header></Header>

        <div className="main-template__body">
          <Menu />
        </div>

        <div className="main-template__footer">
          <ProfileBadge />
        </div>
      </div>

      <div className="main-template__content"></div>
    </div>
  );
};

export default MainTemplate;
