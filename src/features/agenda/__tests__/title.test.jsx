import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { lorem } from "faker";
import React from "react";
import { State } from "xstate";
import { AgendaItemName } from "../components/Title.jsx";
afterEach(cleanup);

test("A realtime update of the text as you are editing, updates the text you are editing", () => {
  const randomtitle = lorem.words();
  const updatedTitle = lorem.words();

  const props = {
    name: randomtitle,
    id: 123,
    meetingId: 456,
    prep: {},
    firebase: jest.fn(),
    state: {
      value: "draft",
      matches: jest.fn()
    }
  };

  const { getByTestId, rerender } = render(<AgendaItemName {...props} />);

  expect(getByTestId("itemName")).toHaveTextContent(randomtitle);
  const nextProps = { ...props, name: updatedTitle };
  rerender(<AgendaItemName {...nextProps} />);
  expect(getByTestId("itemName")).toHaveTextContent(updatedTitle);
});

test.skip("Edit box will autosave 2 seconds after you stop typing", () => {
  const randomtitle = lorem.words();

  const props = {
    name: randomtitle,
    id: 123,
    meetingId: 456,
    prep: {},
    firebase: jest.fn(),
    state: State.from("draft")
  };

  console.log("props", props);

  const { getByTestId } = render(<AgendaItemName {...props} />);

  // click edit button
  //   const editButton = getByTestId("itemName");
  //   userEvent.click(editButton);

  fireEvent.click(getByTestId("itemName"));
  getByTestId("editableItemName");

  // wait seconds
  // not editable anymore
  // save was fired
});

test.skip("if empty , throw error", () => {});
test.skip("if any fields emply ,  cannot submit form", () => {});

test.skip("state of entire form gets pushed", () => {});
