import { Grommet } from "grommet";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Agenda from "./pages/Agenda";
import Landing from "./pages/Landing";
const theme = {
  global: {
    colors: { brand: "#373F85", placeholder: "#D4D4D4" }
  }
};

export const App = ({ initClient }) => {
  React.useEffect(() => initClient(), [initClient]);
  return (
    <BrowserRouter>
      <Grommet theme={theme}>
        <main className={`pa0 ma0 sans-serif`} data-testid="routes">
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/" component={Agenda} /> */}
          <Route path="/meeting/:meetingId" component={Agenda} />
          <div className="w-100 tc white">
            <small>Version 0.2.0</small>
          </div>
        </main>
      </Grommet>
    </BrowserRouter>
  );
};
