import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Global } from "@emotion/react";
import { globalStyles } from "./globalStyles";

ReactDOM.render(
  <>
    <Global styles={globalStyles} />
    <App />
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
