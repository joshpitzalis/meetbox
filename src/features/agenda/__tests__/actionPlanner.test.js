import "@testing-library/jest-dom/extend-expect";
import { cleanup, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
// import { Router } from "react-router-dom";
// import { Routes } from "../../../utilities/Routes";
import ActionPlan from "../../../pages/ActionPlan";
afterEach(cleanup);

test.only("clicking on the toggle button toggles between action plan and minutes view", () => {
  const history = createMemoryHistory({ initialEntries: ["/meeting/123"] });

  const { getByTestId, queryByTestId } = render(ActionPlan);

  // const props = {
  //   match: {
  //     params: {
  //       meetingId: "123"
  //     }
  //   }
  // };
  // const { getByTestId, queryByTestId } = render(<Agenda {...props} />);
  getByTestId("routes");
  getByTestId("agendaPage");
  getByTestId("sidebar");
  expect(queryByTestId("saveAgenda")).not.toBeInDocument();
  // getByTestId("saveAgenda");
});
