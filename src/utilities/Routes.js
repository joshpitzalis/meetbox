import { Grommet } from "grommet";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Banner from "../components/Banner";
import Agenda from "../pages/Agenda";
import Landing from "../pages/Landing";

const theme = {
  global: {
    colors: { brand: "#373F85", placeholder: "#D4D4D4" }
  }
};

const NoMatch = () => (
  <section data-testid="noMatchPage">
    <p>No Match For this Page</p>
  </section>
);

export const App = ({ initClient }) => {
  React.useEffect(() => initClient(), [initClient]);

  return (
    <BrowserRouter>
      <Grommet theme={theme}>
        <main className={`pa0 ma0 sans-serif`} data-testid="routes">
          <Routes />
          <div className="w-100 tc white">
            <small>Version {process.env.REACT_APP_VERSION}</small>
          </div>
        </main>
      </Grommet>
    </BrowserRouter>
  );
};

export const Routes = () => {
  return (
    <>
      <Banner />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/meeting/:meetingId" component={Agenda} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};
