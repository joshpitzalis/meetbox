import React from "react";
import ReactDOM from "react-dom";
import { App } from "./Routes";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

const initClient = () => {
  const script = document.createElement("script");
  // script.src = "https://apis.google.com/js/client.js";
  script.src = "https://apis.google.com/js/api.js";

  script.onload = () => {
    const { gapi } = window;
    gapi.load("client", () => {
      // gapi.client.setApiKey(API_KEY);
      // gapi.client.load("youtube", "v3", () => {
      //   this.setState({ gapiReady: true });
      // });

      console.log("loaded client");

      // // It's OK to expose these credentials, they are client safe.
      // gapi.client.init({
      //   apiKey: 'YOUR_FIREBASE_API_KEY',
      //   clientId: 'YOUR_OAUTH2_CLIENTID',
      //   discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      //   scope: 'https://www.googleapis.com/auth/calendar'
      // })

      // gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));
    });
  };

  document.body.appendChild(script);
};

ReactDOM.render(
  <App initClient={initClient} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
