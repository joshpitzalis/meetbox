import { lorem } from "faker";

describe("happy Path", () => {
  it("lets me submit an agenda, activate it, edit it during a meeting, then complete it", () => {
    const itemName = "example item name";
    const prepName = "example prep item";
    const meetingName = "test meeting name";
    const updatedMeetingName = "updated meeting name";
    const note = lorem.sentence();
    const task = lorem.words();
    cy.visit("/")
      .getByText(/get started/i)
      .click()
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
      .getByText(/No Googles, give me a link to share/i)
      .click()
      .getByText(/Finalise Agenda/i)
      .click()
      .getByText(
        /Once an agenda is finalised it will no longer be editable. Confirm to proceed./i
      )
      .getByText(/confirm finalisation/i)
      .click()
      .getByText(/You need a title/i)
      .getByPlaceholderText(/keep it super short/i)
      .type(meetingName)
      .getByText(/confirm finalisation/i)
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
      // editing during a meeting
      .queryAllByTestId("editableItemName")
      .first()
      .clear()
      .type(updatedMeetingName)
      .getAllByTestId("itemNameForm")
      .first()
      .submit()
      // minutes
      .getAllByPlaceholderText(/enter your minutes here.../i)
      .first()
      .type(note)
      // task
      .getAllByTestId("editTask")
      .first()
      .click()
      .getByTestId("taskEditBox")
      .getAllByPlaceholderText(
        /Describe any prep you need people to do for this agenda item./i
      )
      .first()
      .type(task)
      .getAllByText(/Add/i)
      .first()
      .click()
      // end the meeting
      .getByTestId("stopButton")
      .click()
      .queryByTestId("stopButton")
      .should("not.exist")
      .getByText(updatedMeetingName)
      .getByText(note)
      .getByText(task)
      // try editing after a meeting has ended
      .queryByTestId("editTitle")
      .should("not.exist")
      .queryByTestId("taskEditBox")
      .should("not.exist");
  });

  it.skip("delete item", () => {});
  it.skip("loads an existing meeting in each state", () => {});
});
