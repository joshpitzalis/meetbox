declare global {
  interface Window {
    gapi: any;
  }
}

export const initClient = () => {
  const script = document.createElement("script");

  script.src = "https://apis.google.com/js/api.js";

  script.onload = () => {
    const { gapi } = window;
    gapi.load("client", () => {
      console.log("loaded client");

      gapi.client.init({
        // apiKey: process.env.REACT_APP_API_KEY,
        clientId: process.env.REACT_APP_OAUTH2_CLIENTID,
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
        ],
        scope: "https://www.googleapis.com/auth/calendar.events"
      });

      // gapi.client.load("youtube", "v3", () => {
      //   this.setState({ gapiReady: true });
      // });
      gapi.client.load("calendar", "v3", () => console.log("loaded calendar"));
    });
  };

  document.body.appendChild(script);
};
