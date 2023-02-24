import React from "react";

import { useTheme } from "../../utils/hooks/useTheme";

import "./styles.css";

const DarkmodeToggleStatic = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <div className="darkmode-toggle-static">
      <span className="darkmode-toggle-static__span">Tema escuro</span>

      <label className="dark-switch">
        <input
          type="checkbox"
          onChange={switchTheme}
          checked={theme === "dark" ? true : false}
        />
        <i />
      </label>
    </div>
  );
};

export default DarkmodeToggleStatic;
