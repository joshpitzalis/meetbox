import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from "@testing-library/react";
// import "jest-dom/extend-expect";
import React from "react";
import App from "../../../pages/App";
import { convertToTimeInterval } from "../helpers/timeBarHelpers";

afterEach(cleanup);

test("selecting a date show teh correct date", async () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText(/23/i));
  const timePicker = await waitForElement(() => getByText(/1 pm to 2 pm/i));

  // expect(asFragment()).toMatchSnapshot();
});

test("time converter converts time", () => {
  expect(convertToTimeInterval([1, 2])).toBe(`1 am to 2 am`);
  expect(convertToTimeInterval([14, 15])).toBe(`2 pm to 3 pm`);
  expect(convertToTimeInterval([23, 24])).toBe(`11 pm to 12 pm`);
});

xtest("cant have two dates on teh same time", () => {});
xtest("it can delete a time", () => {});
xtest("if only one time then deleting remove steh date from teh calendar", () => {});
