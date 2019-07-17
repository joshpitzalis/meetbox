describe("happy Path", () => {
  // let testAgenda = "";
  let testAgenda = "/meeting/SBRBAkiHCEmtXFJEWSBU";

  it("redirects to unique URL from root", () => {
    cy.visit("/")
      .location()
      .should(loc => {
        testAgenda = loc.pathname;
        expect(loc.pathname).not.to.eq("/");
      });
  });

  it("lets me submit an agenda, activate it, then complete it", () => {
    const itemName = "test item";
    const prepName = "test prep";
    const meetingName = "test meeting";

    cy.visit(testAgenda)
      .getByText(/Add An Agenda Item/i)
      .click()
      .queryByTestId("agendaItem")
      .getAllByPlaceholderText(/Give your first agenda Item a name/i)
      .first()
      .type(itemName)
      .getAllByTestId("itemNameForm")
      .first()
      .submit()
      .getAllByText(/click here to add prep/i)
      .first()
      .click()
      .getAllByPlaceholderText(
        /Something you want people to do before the meeting/i
      )
      .first()
      .type(prepName)
      .getByTestId("prepForm")
      .submit()
      .getByTestId("saveAgenda")
      .click()
      .getByTestId("agendaSubmitForm")
      .click()
      .getByText(/Finalise Agenda/i)
      .click()
      .getByText(/You need a title/i)
      .getByPlaceholderText(/keep it super short/i)
      .type(meetingName)
      .getByText(/Finalise Agenda/i)
      .click()
      .getByTestId("playButton")
      .click()
      .getByTestId("stopButton")
      .click()
      .queryByTestId("stopButton")
      .should("not.exist");
  });

  it.skip("try editing in saved, then edit i active, then try edit in complete", () => {});
});
