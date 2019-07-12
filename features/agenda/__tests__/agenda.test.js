import { cleanup, fireEvent, render } from "@testing-library/react";
// this adds custom jest matchers from jest-dom
import "jest-dom/extend-expect";
import React from "react";
import { Minutes } from "../components/AgendaItem.tsx";

afterEach(cleanup);

test("Clicking on the minutes section reveals the editor ", async () => {
  const props = {
    setShowNotes: jest.fn()
  };

  const { getByTestId } = render(<Minutes {...props} />);
  getByTestId("minutesButton");
  fireEvent.click(getByTestId("minutesButton"));
  getByTestId("editableMinutes");
});

test("Editing the minutes section saves the minutes to storage", async () => {
  const props = {
    firebase: jest.fn(),
    itemId: 123,
    meetingId: "abc"
  };

  const { getByTestId } = render(<Minutes {...props} />);
  getByTestId("minutesButton");
  fireEvent.click(getByTestId("minutesButton"));
  getByTestId("editableMinutes");
  // type in some text
  // wait 3 seconds
  // make sure it gets saved
  expect(true).toBeFalsy();
});

test("anyone can create a task", () => {
  expect(true).toBeFalsy();
});
test("anyone can complete a task", () => {
  expect(true).toBeFalsy();
});

test("you shouldn't be able to add a blank agenda item to the agenda, add validation before submitting", () => {
  expect(true).toBeFalsy();
});
