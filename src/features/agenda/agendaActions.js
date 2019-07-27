import { notfication$ } from "../../components/Banner";

export const handleWelcomeNotification = () =>
  notfication$.next({
    message:
      "Add things you want to discuss in a meeting, then save your agenda to invite people to the meeting."
  });

export const handleAgendaSetNotification = () =>
  notfication$.next({
    type: "SUCCESS",
    message:
      "🎉 You're done! Nice. Come back to this page on the day of the meeting and click on the green rocket to start the meeting. The app will help you take notes of what happens and keep a record of what people say they will do. 🎉"
  });

export const handleMeetingStartNotification = () =>
  notfication$.next({
    type: "ERROR",
    message:
      "This meeting has now started. Make sure you end the meeting when you are done to save all your notes."
  });

export const handleMeetingOverNotification = () =>
  notfication$.next({
    type: "SUCCESS",
    message:
      "🎉 Congratulations! Your meeting is over. The details on this page will never change. Make a note of the link so that you can review these details if you ever need to. 🎉"
  });
