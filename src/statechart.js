import { Machine } from "xstate";
import { createAgenda } from "./features/agenda/agendaHelpers";

export default Machine({
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
          target: "loading"
        }
      }
    },
    draft: {
      on: {
        SAVED_DRAFT: "confirmed",
        SAVED_TO_CAL: "confirmed"
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
      on: {
        STARTED: "active"
      }
    },
    active: {
      on: {
        ENDED: "complete"
      }
    },
    complete: {
      entry: ["updateCompleteStatus"],
      type: "final"
    }
  }
});
