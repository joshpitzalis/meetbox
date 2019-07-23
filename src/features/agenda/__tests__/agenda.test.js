import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { lorem } from "faker";
import React from "react";
import { State } from "xstate";
import Minutes from "../components/Minutes.jsx";

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

xtest("test that when minutes on one item gets saved, it sdoesn't overwrite minutes on another item. test taht both get save dinidivdually", () => {
  expect(true).toBeFalsy();
});

xtest("test that pushing staus change, by another user, updates your agenda", () => {
  expect(true).toBeFalsy();
});

xtest("make sure a banner appears when a state is changed", () => {
  expect(true).toBeFalsy();
});
