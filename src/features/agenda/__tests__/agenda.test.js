import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { lorem } from "faker";
// this adds custom jest matchers from jest-dom
// import "jest-dom/extend-expect";
import React from "react";
import { handleMinutesTextUpdate } from "../agendaSideEffects";
import { Minutes } from "../components/Minutes.jsx";

jest.mock("../agendaSideEffects", () => {
  handleMinutesTextUpdate: jest.fn(() => {});
});

afterEach(cleanup);

test.skip("Editing the minutes section saves the minutes to storage", () => {
  const note = lorem.sentences();

  const props = {
    firebase: jest.fn(),
    itemId: 123,
    meetingId: "abc",
    minutes: "",
    state: {
      value: "active",
      matches: jest.fn(() => true)
    }
  };

  const { getByPlaceholderText } = render(<Minutes {...props} />);
  const textbox = getByPlaceholderText(/enter your minutes here.../i);
  userEvent.type(textbox, note);

  expect(handleMinutesTextUpdate).toHaveBeenCalled();
});

test("Clicking on the minutes section reveals the editor ", () => {
  const props = {
    setShowNotes: jest.fn(),
    firebase: jest.fn(),
    itemId: 123,
    meetingId: 456,
    minutes: "minutes",
    state: {
      value: "draft",
      matches: jest.fn()
    }
  };

  const { getByTestId } = render(<Minutes {...props} />);
  getByTestId("editableMinutes");
});

xtest("anyone can create a task", () => {
  expect(true).toBeFalsy();
});
xtest("anyone can complete a task", () => {
  expect(true).toBeFalsy();
});

xtest("you shouldn't be able to add a blank agenda item to the agenda, add validation before submitting", () => {
  expect(true).toBeFalsy();
});

xtest("create task", () => {
  expect(true).toBeFalsy();
});

xtest("update task", () => {
  expect(true).toBeFalsy();
});

xtest("delete task", () => {
  expect(true).toBeFalsy();
});
