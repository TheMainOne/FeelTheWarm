import React from "react";
import ReactDOM from "react-dom";
import { App } from "components/App";
import './translation/i18n';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
