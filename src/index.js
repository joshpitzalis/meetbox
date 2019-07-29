import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { initClient } from "./features/calendar/calHelpers";
import "./styles/index.css";
import "./styles/refactored/rf-index.css";
import { App } from "./utilities/Routes";
import * as serviceWorker from "./utilities/serviceWorker";
ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
ReactDOM.render(
  <App initClient={initClient} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
