import { Grommet } from "grommet";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Agenda from "./pages/Agenda";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Grommet plain>
        <main className="pa0 ma0 sans-serif">
          <Route exact path="/" component={Agenda} />
          <Route path="/meeting/:meetingId" component={Agenda} />
        </main>
      </Grommet>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
