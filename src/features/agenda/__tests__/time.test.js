import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import Time from "../components/Time.jsx";
afterEach(cleanup);
jest.useFakeTimers();
test("Time box shows time in minutes", () => {
  const props = {
    minutes: 5
  };

  const { getByText } = render(<Time {...props} />);

  getByText(props.minutes.toString());
});

test("inc and dec adjust time by 5 minutes", () => {
  const props = {
    minutes: 5
  };

  const { getByTestId, getByText } = render(<Time {...props} />);
  fireEvent.click(getByTestId("inc"));
  getByText("10");
  fireEvent.click(getByTestId("dec"));
  getByText("5");
});

test("you cannot decrement to less than 5 minutes", () => {
  const props = {
    minutes: 5
  };

  const { getByTestId, getByText, queryByText } = render(<Time {...props} />);
  fireEvent.click(getByTestId("dec"));
  getByText("5");
  getByText("5 is the minimum.");
  act(() => {
    jest.runAllTimers();
  });
  expect(queryByText("5 is the minimum.")).not.toBeInTheDocument();
});

xtest("the time gets saved to firebase", () => {});
xtest("different times get saved to dfferent items", () => {});
xtest("the total time appears in the sidebar", () => {});
xtest("the time counts down when the meeting begins", () => {});
xtest("the time shows negatve time when it run over", () => {});

xtest("time should only render in draft, confirmed and active", () => {});

xtest("time should only be editable in draft", () => {});
