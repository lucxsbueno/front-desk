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

root.render(
  <Router>
    <App />
  </Router>
);
