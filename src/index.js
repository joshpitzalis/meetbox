import * as Sentry from "@sentry/browser";
import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { initClient } from "./features/calendar/calHelpers";
import "./styles/index.css";
import "./styles/refactored/rf-index.css";
import { App } from "./utilities/Routes";
import * as serviceWorker from "./utilities/serviceWorker";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    release: process.env.REACT_APP_VERSION,
    dsn: "https://9d62f97eeb4841afb06190594c0d5f15@sentry.io/1520725"
  });
}

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

ReactDOM.render(
  <App initClient={initClient} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// configuring test coverage https://jasonraimondi.com/posts/showing-code-coverage-for-a-react-app-using-code-climate-with-travis-ci/
