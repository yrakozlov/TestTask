import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
