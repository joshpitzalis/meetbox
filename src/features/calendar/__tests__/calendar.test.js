import { cleanup, render } from "@testing-library/react";
import React from "react";
import { App } from "../../../utilities/Routes";

afterEach(cleanup);

test("When the app load it initializes gapi", () => {
  const props = {
    initClient: jest.fn()
  };

  const { getByTestId } = render(<App {...props} />);
  getByTestId("routes");
  expect(props.initClient).toHaveBeenCalled();
});

xtest("add meeting link to calendar", () => {
  expect(true).toBeFalsy();
});

xtest("you must submit atleast one attendee", () => {
  expect(true).toBeFalsy();
});

xtest("You shouldn't be able to add dates in the past", () => {
  expect(true).toBeFalsy();
});
