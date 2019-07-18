import { lorem } from "faker";

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

  it("lets me submit an agenda, activate it, edit it during a meeting, then complete it", () => {
    const itemName = "example item name";
    const prepName = "example prep item";
    const meetingName = "test meeting name";
    const updatedMeetingName = "updated meeting name";

    const note = lorem.sentence();
    const task = lorem.words();

    cy.visit(testAgenda)
      // create an agenda in draft mode
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
      // save agenda
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
      // agenda confirmed
      .getByTestId("playButton")
      // try editing once agenda confirmed
      .getByText(itemName)
      .getByText(prepName)
      .getByText(meetingName)
      .queryByTestId("editTitle")
      .should("not.exist")
      .queryByTestId("prepForm")
      .should("not.exist")
      // meeting starts
      .getByTestId("playButton")
      .click()
      .getByTestId("stopButton")
      // try editing during a meeting
      .queryAllByTestId("editTitle")
      .first()
      .click()
      .getByTestId("editableItemName")
      .clear()
      .type(updatedMeetingName)
      .getAllByTestId("itemNameForm");

    // tk add minutes
    // tk add tasks
    lorem

      .first()
      .submit()
      .getByTestId("stopButton")
      .click()
      // end the meeting
      .queryByTestId("stopButton")
      .should("not.exist")
      .getByText(updatedMeetingName)
      // try editing after a meeting has ended
      .queryByTestId("editTitle")
      .should("not.exist");

    // tk check off a task
  });
});
