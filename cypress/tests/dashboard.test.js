// Test Built Version
// Tests will run faster locally if you tests against the build version of your app instead of your dev version (with hot module reloading and other dev tools). You can do that by:

// Adding the following npm script:

// "start:dist": "npm run build && firebase serve --only hosting -p 3000",
// Run npm run start:dist to build your app and serve it with firebase

// In another terminal window, run a test command such as npm run test:open

describe("new signup flow", () => {
  it("takes me to the dashboard page when I login", () => {
    cy.visit("/")
      // .getByText(/get started/i)
      .login()
      .getByTestId("dashboardPage");
  });

  it("logout", () => {
    cy.visit("/dashboard/Vo6j8NLrdROzFdpdPyzB4ViurYy2")
      .getByTestId("dashboardPage")
      .getByText(/logout/i)
      .click()
      .getByTestId("landingPage");
  });

  it.only("plan a meeting", () => {
    cy.visit("/dashboard/Vo6j8NLrdROzFdpdPyzB4ViurYy2")
      .getByTestId("dashboardPage")
      .getByText(/Create An Agenda To Begin/i)
      .click()
      .getByTestId("agendaPage");
  });
});

it.skip("create meeting", () => {});

it.skip("add a past meeting", () => {});

it.skip("go to a meeting", () => {});

it.skip("go to a meeting", () => {});

it.skip("redirect to landing if not logged in", () => {});

it.skip("redirect to dash if logged in", () => {});
