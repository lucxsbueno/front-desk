import React from "react";

import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../../../../components/Header";
import HeaderButton from "../../../../components/HeaderButton";

const CHeader = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <Header className="header--bg-white">
      <div className="d-flex flex-row align-items-center justify-content-space-between w-100">
        <div className="d-flex flex-row align-items-center">
          <HeaderButton className="mr-10" onClick={goBack}>
            <ChevronLeft />
          </HeaderButton>

          <span className="text-color text-semi-bold">
            Editar dados do cliente
          </span>
        </div>
      </div>
    </Header>
  );
};

export default CHeader;