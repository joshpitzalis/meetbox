// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import React from "react";
import "storybook-addon-jsx/register";
import { State } from "xstate";
import ConnectedForm from "../src/features/calendar/components/ConnectedForm.jsx";

const props = {
  timezone: "",
  setTimezone: () => {},
  setError: () => {},
  setDateTime: () => {},
  email: "",
  setAttendees: () => {},
  attendees: [],
  setEmail: () => {},
  handleSubmit: () => {},
  error: "",
  summary: "",
  dateTime: "",
  hourFrom: () => {},
  state: State.from("draft.loggedIn"),
  insertEvent: () => {},
  firebase: () => {},
  meetingId: 123,
  setExpanded: () => {},
  send: () => {},
  gapi: () => {},
  description: ""
};

storiesOf("Form", module).add("blank", () => <ConnectedForm {...props} />);
