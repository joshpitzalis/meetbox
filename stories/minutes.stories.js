// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
import { storiesOf } from "@storybook/react";
import { lorem } from "faker";
import React from "react";
import "storybook-addon-jsx/register";
import { State } from "xstate";
import Minutes from "../src/features/agenda/components/Minutes.jsx";
const props = {
  itemId: 123,
  meetingId: 123,
  minutes: lorem.sentence(),
  state: State.from("complete"),
  handleMinutesTextUpdate: () => {},
  firebase: () => {}
};

storiesOf("Minutes", module)
  .add("complete", () => <Minutes {...props} />)
  .add("overflow", () => <Minutes {...props} minutes={lorem.paragraphs()} />);
// .addWithJSX("complete with jsx", () => <Minutes {...props} />);
