import { lorem } from "faker";

// Test Built Version
// Tests will run faster locally if you tests against the build version of your app instead of your dev version (with hot module reloading and other dev tools). You can do that by:

// Adding the following npm script:

// "start:dist": "npm run build && firebase serve --only hosting -p 3000",
// Run npm run start:dist to build your app and serve it with firebase

// In another terminal window, run a test command such as npm run test:open

describe("new signup flow", () => {
  it("hits the dashborad after signup", () => {
    const task = lorem.words();

    cy.visit("/")
      .getByText(/get started/i)
      .login()
      .getByTestId("dashboardPage");
  });

  it.skip("bad signup results inan error", () => {});
});
