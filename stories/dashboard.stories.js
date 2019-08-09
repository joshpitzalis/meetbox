// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import React from "react";
import "storybook-addon-jsx/register";
import { Machine } from "xstate";
import Dashboard from "../src/pages/Dashboard.jsx";

const dashMachine = Machine({
  id: "dashboard",
  initial: "idle",
  states: {
    idle: {}
  }
});

storiesOf("Dashboard", module).add("empty", () => {
  return <Dashboard stateMachine={dashMachine} />;
});
