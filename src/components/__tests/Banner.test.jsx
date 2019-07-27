import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { act } from "react-dom/test-utils";
import { Router } from "react-router-dom";
import { State } from "xstate";
import { Routes } from "../../utilities/Routes";

afterEach(cleanup);

xtest("When you are drafting a pitch the banner explains what you should do", async () => {
  const props = {
    current: State.from("draft"),
    send: jest.fn()
  };
  const history = createMemoryHistory({ initialEntries: ["/meeting/123"] });
  const { getByTestId, queryByTestId } = render(
    <Router history={history}>
      <Routes {...props} />
    </Router>
  );
  expect(queryByTestId("landingPage")).toBeNull();
  expect(getByTestId("agendaPage")).toBeInTheDocument();
  act(() => {
    expect(getByTestId("notification")).toBeInTheDocument();
  });

  //   await waitForElement(() => getByTestId("notification"));
});

xtest("you can close a banner manually", () => {
  const history = createMemoryHistory({ initialEntries: ["/meeting/123"] });
  const { getByTestId, queryByTestId, getByText } = render(
    <Router history={history}>
      <Routes />
    </Router>
  );
  expect(queryByTestId("landingPage")).toBeNull();
  expect(getByTestId("agendaPage")).toBeInTheDocument();
  getByText(/welcome/i);
});
