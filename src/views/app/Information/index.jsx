import React from "react";

import { useLocation } from "react-router-dom";

import NameCard from "./components/NameCard";
import ActionCard from "./components/ActionCard";
import UsadaoAlert from "./components/UsadaoAlert";
import DocumentsCard from "./components/DocumentsCard";
import AnnotationsCard from "./components/AnnotationsCard";
import InformationCard from "./components/InformationCard";
import InformationHeader from "./components/InformationHeader";

import "./styles.css";

const Information = () => {
  const location = useLocation();
  const userInformation = location.state.data;

  console.log(userInformation);

  return (
    <div className="information">
      <InformationHeader />

      <div className="information__body">
        <NameCard userData={userInformation} />

        <UsadaoAlert />

        <InformationCard />

        <ActionCard />

        <DocumentsCard />

        <AnnotationsCard />
      </div>
    </div>
  );
};

export default Information;
