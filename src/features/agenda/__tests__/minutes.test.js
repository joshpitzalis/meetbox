import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { lorem } from "faker";
import React from "react";
import { State } from "xstate";
import Minutes, { SavedStatus } from "../components/Minutes.jsx";

afterEach(cleanup);

test("Editing the minutes section saves the minutes to storage", () => {
  const note = lorem.sentences();

  const props = {
    firebase: jest.fn(),
    itemId: 123,
    meetingId: "abc",
    minutes: "",
    state: State.from("active"),
    handleMinutesTextUpdate: jest.fn()
  };

  const { getByPlaceholderText } = render(<Minutes {...props} />);
  const textbox = getByPlaceholderText(/enter your minutes here.../i);
  userEvent.type(textbox, note);
  expect(props.handleMinutesTextUpdate).toHaveBeenCalled();
});

test("The minutes component does not render the textarea when the agenda is complete", () => {
  const props = {
    firebase: jest.fn(),
    itemId: 123,
    meetingId: "abc",
    minutes: lorem.sentences(),
    state: State.from("complete"),
    handleMinutesTextUpdate: jest.fn()
  };

  const { getByText, getByTestId } = render(<Minutes {...props} />);
  getByText(props.minutes);
  getByTestId("minutesMarkdown");
});

test("if no minutes available then completed minutes renders a blank string", () => {
  const props = {
    firebase: jest.fn(),
    itemId: 123,
    meetingId: "abc",
    minutes: null,
    state: State.from("complete"),
    handleMinutesTextUpdate: jest.fn()
  };

  const { getByText, getByTestId } = render(<Minutes {...props} />);
  getByText("No Minutes");
  getByTestId("minutesMarkdown");
});

test("Saved state renders 'Saving...' if not saved ", () => {
  const props = {
    saved: false
  };

  const { getByText, rerender } = render(<SavedStatus {...props} />);
  getByText("Saving...");
  rerender(<SavedStatus saved={true} />);
  getByText("Saved");
});
