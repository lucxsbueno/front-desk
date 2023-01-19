import { Check } from "lucide-react";
import React from "react";

import "./styles.css";

const UsadaoAlert = () => {

  return (
    <div className="x-p-15 y-p-15 pt-0">
      <div className="usadao-alert">
        <div className="usadao-alert__bg-icon">
          <Check />
        </div>

        <span className="usadao-alert__title">
          Tem cadastro no leilão
        </span>
      </div>
    </div>
  );
}

export default UsadaoAlert;