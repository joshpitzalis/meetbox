import { cleanup, render } from "@testing-library/react";
import React from "react";
import { App } from "../../../Routes";

afterEach(cleanup);

test("When the app load it loads gapi", () => {
  const props = {
    initClient: jest.fn()
  };

  const { getByTestId } = render(<App {...props} />);
  getByTestId("routes");
  expect(props.initClient).toHaveBeenCalled();
});
