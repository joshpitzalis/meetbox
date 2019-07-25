import { Machine } from "xstate";
import {
  handleAgendaSetNotification,
  handleMeetingOverNotification,
  handleMeetingStartNotification,
  handleWelcomeNotification
} from "../features/agenda/agendaActions";
import { createAgenda } from "../features/agenda/agendaHelpers";
// tk rather than redirecting on idle you can persist state instead https://xstate.js.org/docs/guides/states.html#persisting-state

export default Machine(
  {
    id: "agenda",
    initial: "idle",
    states: {
      idle: {
        on: {
          NEW_AGENDA_CREATED: "creatingAgenda",
          REDIRECTED_TO_EXISTING_AGENDA: "draft",
          REDIRECTED_TO_CONFIRMED_AGENDA: "confirmed",
          REDIRECTED_TO_ACTIVE_AGENDA: "active",
          REDIRECTED_TO_COMPLETE_AGENDA: "complete"
        }
      },
      creatingAgenda: {
        invoke: {
          id: "createAgenda",
          src: (context, event) => createAgenda(event),
          onDone: {
            target: "draft"
            // The resolved data is placed into a 'done.invoke.<id>' event, under the data property http://bit.ly/2Ft2WR8
          },
          onError: {
            target: "idle"
          }
        }
      },
      draft: {
        entry: "handleWelcomeNotification",
        on: {
          SAVED_DRAFT: "confirmed",
          SAVED_TO_CAL: "confirmed",
          REDIRECTED_TO_CONFIRMED_AGENDA: "confirmed",
          REDIRECTED_TO_ACTIVE_AGENDA: "active",
          REDIRECTED_TO_COMPLETE_AGENDA: "complete"
        },
        initial: "loggedOut",
        states: {
          loggedOut: {
            on: {
              CALENDAR_CONNECTED: "loggedIn",
              URL_ONLY: "linkOnly"
            }
          },
          linkOnly: {
            on: {
              FINALISED: "confirm",
              RETURNED: "loggedOut"
            }
          },
          confirm: {
            on: {
              RETURNED: "loggedOut"
            }
          },
          loggedIn: {
            on: {
              RETURNED: "loggedOut"
            }
          }
        }
      },

      confirmed: {
        entry: "handleAgendaSetNotification",
        on: {
          STARTED: "active",
          REDIRECTED_TO_ACTIVE_AGENDA: "active",
          REDIRECTED_TO_COMPLETE_AGENDA: "complete"
        }
      },
      active: {
        entry: "handleMeetingStartNotification",
        on: {
          ENDED: "complete",
          REDIRECTED_TO_COMPLETE_AGENDA: "complete"
        }
      },
      complete: {
        entry: "handleMeetingOverNotification",
        type: "final"
      }
    }
  },
  {
    actions: {
      handleWelcomeNotification,
      handleAgendaSetNotification,
      handleMeetingStartNotification,
      handleMeetingOverNotification
    }
  }
);
