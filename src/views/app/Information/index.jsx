import React from "react";

import { useLocation } from "react-router-dom";

import NameCard from "./components/NameCard";
import UsadaoAlert from "./components/UsadaoAlert";
import InformationHeader from "./components/InformationHeader";

import "./styles.css";

const Information = () => {
  const location = useLocation();
  const userInformation = location.state.data;

  return (
    <div className="information">
      <InformationHeader />

      <div className="information__body">
        <NameCard name={userInformation.title} pic={userInformation.profile_picture} />
        <UsadaoAlert />
      </div>
    </div>
  );
};

export default Information;
