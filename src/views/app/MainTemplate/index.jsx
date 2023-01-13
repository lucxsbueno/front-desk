import React from "react";

import Header from "../../../components/Header";
import MainTemplateMenu from "./components/Menu";

import "./styles.css";

const MainTemplate = () => {

  return (
    <div className="main-template">
      <div className="main-template__nav">
        <Header>
        </Header>

        <div className="main-template__body">
          <MainTemplateMenu />
        </div>

        <div className="main-template__footer">

        </div>
      </div>

      <div className="main-template__content">

      </div>
    </div>
  );
}

export default MainTemplate;