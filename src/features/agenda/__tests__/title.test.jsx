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

test.only("A realtime update updates the text as you are editing", () => {
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

  const { getByText } = render(<AgendaItemName {...props} />);
  getByText(title);

  //   expect(false).toBeFalsy();
});
