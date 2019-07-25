import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import { State } from "xstate";
import { Routes } from "../../utilities/Routes";

afterEach(cleanup);

const props = {
  current: State.from("draft"),
  send: jest.fn()
};

test("Agenda page Renders", () => {
  const history = createMemoryHistory({ initialEntries: ["/meeting/123"] });

  const { getByTestId, queryByTestId } = render(
    <Router history={history}>
      <Routes {...props} />
    </Router>
  );
  expect(queryByTestId("landingPage")).toBeNull();
  expect(getByTestId("agendaPage")).toBeInTheDocument();
});

test("No match page renders", () => {
  const history = createMemoryHistory({ initialEntries: ["/123"] });
  const { getByTestId, queryByTestId } = render(
    <Router history={history}>
      <Routes {...props} />
    </Router>
  );
  expect(queryByTestId("landingPage")).toBeNull();
  expect(queryByTestId("agendaPage")).toBeNull();
  expect(getByTestId("noMatchPage")).toBeInTheDocument();
});
