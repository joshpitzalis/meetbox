import { Grommet } from "grommet";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./pages/App";
import Meetings from "./pages/Meetings";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

const Routes: React.FunctionComponent = () => (
  <Grommet plain>
    <BrowserRouter>
      <main className="sans-serif">
        <Route exact path="/" component={App} />
        <Route exact path="/meet/:meetId" component={Meetings} />
      </main>
    </BrowserRouter>
  </Grommet>
);

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
