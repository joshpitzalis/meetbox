import { lorem } from "faker";

describe("happy Path", () => {
  it("lets me submit an agenda, activate it, edit it during a meeting, then complete it, also tests banners appear for each state", () => {
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
      .getByText(
        /Add things you want to discuss in a meeting, then save your agenda to invite people to the meeting./i
      )
      .getByTestId("closeNotification")
      .click()
      .queryByText(
        /Add things you want to discuss in a meeting, then save your agenda to invite people to the meeting./i
      )
      .should("not.exist")
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
      // .getByTestId("agendaSubmitForm")
      // .click()
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
      .queryByText(
        / 🎉 On the day of the meeting, open the link to this page and click on the green rocket to start the meeting so that you can take notes of what happens and keep a record of what people say they will do. 🎉/i
      )
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
      .queryByText(
        /This meeting has now started. Make sure you end the meeting when you are done to save all your notes./
      )
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
      .queryByText(
        /🎉 Congratulations! Your meeting is over. The details on this page will never change. Make a note of the link so that you can review these details if you ever need to. 🎉/i
      )
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

  it.skip("delete item, also test that it deletes while active", () => {});
  it.skip("loads an existing meeting in each state", () => {});
});
