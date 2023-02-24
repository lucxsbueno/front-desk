import React from "react";

import useLocalStorage from "use-local-storage";

export const ThemeContext = React.createContext({});

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useLocalStorage("theme");

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
