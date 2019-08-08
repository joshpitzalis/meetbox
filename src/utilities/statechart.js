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
        initial: "loggedOut",
        states: {
          loggedOut: {
            on: {
              CALENDAR_CONNECTED: "loggedIn",
              URL_ONLY: "linkOnly"
            }
          },
          linkOnly: {
            entry: "analyticsLinkOnly",
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
            entry: "analyticsGoogle",
            on: {
              RETURNED: "loggedOut"
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
      analyticsDraft: () =>
        window.analytics.page({
          title: "Draft Page",
          url: "https://meetbox.io/meeting/draft",
          path: "/meeting/draft",
          referrer: "https://segment.com/"
        }),

      analyticsConfirmed: () =>
        window.analytics.page({
          title: "Confirmed Page",
          url: "https://meetbox.io/meeting/confirmed",
          path: "/meeting/confirmed",
          referrer: "https://segment.com/"
        }),

      analyticsActive: () =>
        window.analytics.page({
          title: "Active Page",
          url: "https://meetbox.io/meeting/active",
          path: "/meeting/active",
          referrer: "https://segment.com/"
        }),
      analyticsComplete: () =>
        window.analytics.page({
          title: "Complete Page",
          url: "https://meetbox.io/meeting/complete",
          path: "/meeting/complete",
          referrer: "https://segment.com/"
        }),
      analyticsActionPlan: () =>
        window.analytics.page({
          title: "Action Page",
          url: "https://meetbox.io/meeting/action",
          path: "/meeting/action",
          referrer: "https://segment.com/"
        }),

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
