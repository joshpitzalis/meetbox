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
        entry: ["handleWelcomeNotification", "analyticsDraft"],
        on: {
          SAVED_DRAFT: "confirmed",
          SAVED_TO_CAL: "confirmed",
          REDIRECTED_TO_CONFIRMED_AGENDA: "confirmed",
          REDIRECTED_TO_ACTIVE_AGENDA: "active",
          REDIRECTED_TO_COMPLETE_AGENDA: "complete"
        },
        initial: "loggedIn",
        states: {
          loggedIn: {
            entry: "analyticsGoogle",
            on: {
              RETURNED: "loggedIn",
              URL_ONLY: "linkOnly"
            }
          },

          linkOnly: {
            entry: "analyticsLinkOnly",
            on: {
              FINALISED: "confirm",
              RETURNED: "loggedIn"
            }
          },
          confirm: {
            on: {
              RETURNED: "loggedIn"
            }
          }
        }
      },

      confirmed: {
        entry: ["handleAgendaSetNotification", "analyticsConfirmed"],
        on: {
          STARTED: "active",
          REDIRECTED_TO_ACTIVE_AGENDA: "active",
          REDIRECTED_TO_COMPLETE_AGENDA: "complete"
        }
      },
      active: {
        entry: ["handleMeetingStartNotification", "analyticsActive"],
        on: {
          ENDED: "complete",
          REDIRECTED_TO_COMPLETE_AGENDA: "complete"
        }
      },
      complete: {
        entry: ["handleMeetingOverNotification", "analyticsActionPlan"],
        initial: "actionPlan",
        states: {
          actionPlan: {
            on: {
              REDIRECTED_TO_MINUTES_VIEW: "minutes"
            }
          },
          minutes: {
            on: {
              REDIRECTED_TO_ACTION_PLAN: "actionPlan"
            }
          }
        }
      }
    }
  },
  {
    actions: {
      analyticsDraft: () => window.analytics.page("Draft Page"),
      analyticsConfirmed: () => window.analytics.page("Confirmed Page"),
      analyticsActive: () => window.analytics.page("Active Page"),
      analyticsComplete: () => window.analytics.page("Complete Page"),
      analyticsActionPlan: () => window.analytics.page("Action Page"),
      analyticsGoogle: () =>
        window.analytics.track("invite_with_google", {
          category: "User",
          action: "Logged in to Send Invites With Google"
        }),
      analyticsLinkOnly: () =>
        window.analytics.track("link_only_invite", {
          category: "User",
          action: "Sent Invites With Link Only"
        }),

      handleWelcomeNotification,
      handleAgendaSetNotification,
      handleMeetingStartNotification,
      handleMeetingOverNotification
    }
  }
);
