import { lorem } from "faker";

// Test Built Version
// Tests will run faster locally if you tests against the build version of your app instead of your dev version (with hot module reloading and other dev tools). You can do that by:

// Adding the following npm script:

// "start:dist": "npm run build && firebase serve --only hosting -p 3000",
// Run npm run start:dist to build your app and serve it with firebase

// In another terminal window, run a test command such as npm run test:open

describe("new signup flow", () => {
  it.skip("lets me submit an agenda, activate it, edit it during a meeting, then complete it, also tests banners appear for each state", () => {
    const itemName = "example item name";
    const prepName = "example prep item";
    const meetingName = "test meeting name";
    const updatedMeetingName = "updated meeting name";
    const note = lorem.sentence();
    const task = lorem.words();
    cy.visit("/")
      .login()
      .getByText(/get started/i)
      .click();
    //   // create an agenda in draft mode
    //   .getByText(
    //     /Close this notification to start making a list of all the things you want to discuss in your meeting./i
    //   )
    //   .getByTestId("closeNotification")
    //   .click()
    //   .queryByText(
    //     /Add things you want to discuss in a meeting, then save your agenda to invite people to the meeting./i
    //   )
    //   .should("not.exist")
    //   .getByText(/Add An Agenda Item/i)
    //   .click()
    //   .queryByTestId("agendaItem")
    //   .getAllByPlaceholderText(/Give your first agenda Item a name/i)
    //   .first()
    //   .type(itemName)
    //   .getAllByTestId("itemNameForm")
    //   .first()
    //   .submit()
    //   .getAllByText(/Add Preparation/i)
    //   .first()
    //   .click()
    //   .getAllByPlaceholderText(/add some prep/i)
    //   .first()
    //   .type(prepName)
    //   .getByTestId("prepForm")
    //   .submit()
    //   // save agenda
    //   .getByTestId("saveAgenda")
    //   .click()
    //   // .getByTestId("agendaSubmitForm")
    //   // .click()
    //   .getByText(/No invites, give me a link to share/i)
    //   .click()
    //   .getByText(/Finalise Agenda/i)
    //   .click()
    //   .getByText(
    //     /Once an agenda is finalised it will no longer be editable. Confirm to proceed./i
    //   )
    //   .getByText(/confirm finalisation/i)
    //   .click()
    //   .getByText(/You need a title/i)
    //   .getByPlaceholderText(/keep it short and clear/i)
    //   .type(meetingName)
    //   .getByText(/confirm finalisation/i)
    //   .click()
    //   // agenda confirmed
    //   .queryByText(
    //     / 🎉 You're done! Nice. Come back to this page on the day of the meeting. You can take notes of what happens during the meeting and keep a record of what people say they will do. 🎉/i
    //   )
    //   .getByTestId("playButton")
    //   // try editing once agenda confirmed
    //   .getByText(itemName)
    //   .getByText(prepName)
    //   .getByText(meetingName)
    //   .queryByTestId("editTitle")
    //   .should("not.exist")
    //   .queryByTestId("prepForm")
    //   .should("not.exist")
    //   // meeting starts

    //   .getByTestId("playButton")
    //   .click()
    //   .queryByText(
    //     /This meeting has now started. Make sure you end the meeting when you are done to save all your notes./
    //   )
    //   .getByTestId("closeNotification")
    //   .click()
    //   .getByTestId("stopButton")
    //   // editing during a meeting
    //   .queryAllByTestId("editableItemName")
    //   .first()
    //   .clear()
    //   .type(updatedMeetingName)
    //   .getAllByTestId("itemNameForm")
    //   .first()
    //   .submit()
    //   // minutes
    //   .getAllByPlaceholderText(/enter your minutes here.../i)
    //   .first()
    //   .type(note)
    //   // task
    //   .getAllByTestId("editTask")
    //   .first()
    //   .click()
    //   .getByTestId("taskEditBox")
    //   .getAllByPlaceholderText(/add a new task/i)
    //   .first()
    //   .type(task)
    //   .getAllByText(/Add/i)
    //   .first()
    //   .click()
    //   // end the meeting
    //   .getByTestId("stopButton")
    //   .click()
    //   .queryByText(
    //     /🎉 Congratulations! Your meeting is over. Make a note of the URL so that you can review this whenever you need to. 🎉/i
    //   )
    //   .queryByTestId("stopButton")
    //   .should("not.exist")
    //   .getAllByText(updatedMeetingName)
    //   .getAllByText(note)
    //   .getAllByText(task)
    //   // try editing after a meeting has ended
    //   .queryByTestId("editTitle")
    //   .should("not.exist")
    //   .queryByTestId("taskEditBox")
    //   .should("not.exist")
    //   .getByText("What problem is Meetbox not yet solving for your team ?");
  });
});
