import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { act } from "react-dom/test-utils";
import { EmailForm } from "../Sidebar";

describe("invites form", () => {
  const fakeEmail = "a@a.com";
  const props = {
    helperText: "helper text",
    onSubmit: jest.fn()
  };

  afterEach(cleanup);

  test("Email error if no email is entered", () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(
      <EmailForm {...props} />
    );

    const emailInput = getByPlaceholderText("email@ddress.com");

    userEvent.type(emailInput, "");

    const emailSubmitButton = getByTestId("emailSubmit");

    userEvent.click(emailSubmitButton);

    const sendInvitesButton = getByTestId("sendInvites");

    userEvent.click(sendInvitesButton);

    getByText(/You must enter a recepient/i);
    expect(props.onSubmit).not.toHaveBeenCalled();
  });

  test("Email form sends emails on submission", () => {
    const { getByTestId, getByPlaceholderText, getByText } = render(
      <EmailForm {...props} />
    );
    const emailInput = getByPlaceholderText("email@ddress.com");

    userEvent.type(emailInput, fakeEmail);
    const emailSubmitButton = getByTestId("emailSubmit");
    act(() => {
      userEvent.click(emailSubmitButton);
    });

    getByText(fakeEmail);

    const sendInvitesButton = getByTestId("sendInvites");
    userEvent.click(sendInvitesButton);

    expect(props.onSubmit).toHaveBeenCalled();
    // expect(props.onSubmit).toHaveBeenCalledWith([{ email: fakeEmail }]);
  });

  xtest("shoudl close once sent", () => {});
  xtest("a little banner to say your stuff is sent", () => {});
  xtest("error handling", () => {});
  xtest("icon and spinner", () => {});
  xtest("accessibility testing", () => {});
});
