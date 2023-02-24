import React from "react";

import { WifiOff } from "lucide-react";
import useNetwork from "../../utils/hooks/useNetwork";

import "./styles.css";

const InternetError = () => {
  const status = useNetwork();

  return !status.online ? (
    <div className="conn-alert">
      <div className="conn-alert__icon-bg">
        <WifiOff size={24} />
      </div>

      <div className="conn-alert__wrapper">
        {/* <span className="conn-alert__title">Internet</span> */}
        <span className="conn-alert__message">Sem conexão com a internet</span>
      </div>
    </div>
  ) : null;
};

export default InternetError;
