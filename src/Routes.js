import { Grommet } from "grommet";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Agenda from "./pages/Agenda";

export const App = ({ initClient }) => {
  React.useEffect(() => initClient(), [initClient]);
  return (
    <BrowserRouter>
      <Grommet plain>
        <main className={`pa0 ma0 sans-serif`} data-testid="routes">
          <Route exact path="/" component={Agenda} />
          <Route path="/meeting/:meetingId" component={Agenda} />
          <small>Version 0.1.0</small>
        </main>
      </Grommet>
    </BrowserRouter>
  );
};
