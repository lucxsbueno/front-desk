import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 *
 * Configs
 */
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./utils/hooks/useTheme";

root.render(
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);
