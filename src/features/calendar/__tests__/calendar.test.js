import { cleanup, render } from "@testing-library/react";
import React from "react";
import { State } from "xstate";
import { App } from "../../../utilities/Routes";
import ConnectedForm from "../components/ConnectedForm";
afterEach(cleanup);

window.analytics = {
  page: jest.fn(),
  track: jest.fn()
};

test("When the app load it initializes gapi", () => {
  const props = {
    initClient: jest.fn()
  };

  const { getByTestId } = render(<App {...props} />);
  getByTestId("routes");
  expect(props.initClient).toHaveBeenCalled();
});

test.skip("selecting a name, date, time and attendees produces the correct output", () => {
  const fakeProps = {
    timezone: "",
    setTimezone: () => {},
    setError: () => {},
    setDateTime: () => {},
    email: "",
    setAttendees: () => {},
    attendees: [],
    setEmail: () => {},
    handleSubmit: () => {},
    error: "",
    summary: "",
    dateTime: "",
    hourFrom: () => {},
    state: State.from("draft.loggedIn"),
    insertEvent: () => {},
    firebase: () => {},
    meetingId: 123,
    setExpanded: () => {},
    send: () => {},
    gapi: () => {},
    description: ""
  };

  const dateTime = "2019-07-28T14:22";

  const { getByTestId, debug } = render(<ConnectedForm {...fakeProps} />);
  debug();
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
