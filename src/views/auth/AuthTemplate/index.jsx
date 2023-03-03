import React from "react";

import { Outlet } from "react-router-dom";
import { useTheme } from "../../../utils/hooks/useTheme";

const AuthTemplate = () => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme}>
      <Outlet />
    </div>
  );
};

export default AuthTemplate;
