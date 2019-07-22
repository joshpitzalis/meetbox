// this adds custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { lorem } from "faker";
import React from "react";
import { AgendaItemName } from "../components/Title.jsx";
// jest.mock("../agendaSideEffects", () => {
//   handleMinutesTextUpdate: jest.fn(() => {});
// });

afterEach(cleanup);

test("A realtime update of the text as you are editing, updates the text you are editing", () => {
  const title = lorem.words();

  const props = {
    name: title,
    id: 123,
    meetingId: 456,
    prep: {},
    firebase: jest.fn(),
    state: {
      value: "draft",
      matches: jest.fn(({ state }) => state === "draft")
    }
  };

  const { getByTestId, rerender } = render(<AgendaItemName {...props} />);

  expect(getByTestId("itemName")).toHaveTextContent(title);
  const nextProps = { ...props, name: "fire" };
  rerender(<AgendaItemName {...nextProps} />);
  expect(getByTestId("itemName")).toHaveTextContent("fire");
});

test.only("Edit box will autosave 2 seconds after you stop typing", () => {
  const title = lorem.words();

  const props = {
    name: title,
    id: 123,
    meetingId: 456,
    prep: {},
    firebase: jest.fn(),
    state: {
      value: "draft",
      matches: jest.fn(({ state }) => state === "draft")
    }
  };

  const { getByTestId, rerender } = render(<AgendaItemName {...props} />);

  expect(getByTestId("itemName")).toHaveTextContent(title);
  const nextProps = { ...props, name: "fire" };
  rerender(<AgendaItemName {...nextProps} />);
  expect(getByTestId("itemName")).toHaveTextContent("fire");
});
