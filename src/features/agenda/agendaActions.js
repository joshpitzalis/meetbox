import { notfication$ } from "../../components/Banner";

export const handleWelcomeNotification = () =>
  notfication$.next({
    message:
      "Close this notification to start making a list of all the things you want to discuss in your meeting."
  });

export const handleAgendaSetNotification = () =>
  notfication$.next({
    type: "SUCCESS",
    message:
      "🎉 You're done! Nice. Come back to this page on the day of the meeting. You can take notes of what happens during the meeting and keep a record of what people say they will do. 🎉"
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
      "🎉 Congratulations! Your meeting is over. Make a note of the URL so that you can review this whenever you need to. 🎉"
  });
