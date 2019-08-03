import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { lorem } from "faker";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import { State } from "xstate";
import { Routes } from "../../../utilities/Routes";
import Minutes from "../components/Minutes";

afterEach(cleanup);

test.skip("If there are no agenda items to save draft button should not be visible", () => {
  const history = createMemoryHistory({ initialEntries: ["/meeting/123"] });

  const { getByTestId, queryByTestId } = render(
    <Router history={history}>
      <Routes />
    </Router>
  );

  // const props = {
  //   match: {
  //     params: {
  //       meetingId: "123"
  //     }
  //   }
  // };
  // const { getByTestId, queryByTestId } = render(<Agenda {...props} />);
  getByTestId("routes");
  getByTestId("agendaPage");
  getByTestId("sidebar");
  expect(queryByTestId("saveAgenda")).not.toBeInDocument();
  // getByTestId("saveAgenda");
});

xtest("If there are empty agenda items you should not be able to submit the agenda", () => {
  expect(true).toBeFalsy();
});

xtest("If no agenda item, no helper text below submit button visible", () => {
  expect(true).toBeFalsy();
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

xtest("title overflow in agendat item", () => {});
xtest("prep items fall horizontally", () => {});
xtest("task items fall horizontally", () => {});
xtest("task overflow, in agenda item", () => {});
xtest("teh title should always be at eth top of an item, not in the middle", () => {});
