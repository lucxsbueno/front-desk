import React from "react";

import { useLocation } from "react-router-dom";

import NameCard from "./components/NameCard";
import UsadaoAlert from "./components/UsadaoAlert";
import InformationCard from "./components/InformationCard";
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

        <InformationCard />
      </div>
    </div>
  );
};

export default Information;
