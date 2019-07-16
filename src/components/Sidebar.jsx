import { WorldMap } from "grommet";
import {
  FormClose,
  FormNextLink,
  FormPreviousLink,
  Play,
  Stop
} from "grommet-icons";
import React from "react";
import tzlookup from "tz-lookup";

// this should be minutes from start time
const hoursFromNow = n =>
  new Date(Date.now() + n * 1000 * 60 * 60).toISOString();

const login = async (gapi, send) => {
  const googleAuth = gapi.auth2.getAuthInstance();
  const googleUser = await googleAuth.signIn();

  const token = googleUser.getAuthResponse().id_token;
  send("CALENDAR_CONNECTED");

  const payload = {
    start: {
      dateTime: hoursFromNow(2),
      timeZone: "America/Los_Angeles"
    },
    end: {
      dateTime: hoursFromNow(3),
      timeZone: "America/Los_Angeles"
    },
    summary: "Have Fun!!!",
    description: "Do some cool stuff and have a fun time doing it",

    attendees: [
      {
        // id: string,
        email: "pittman.joshua@gmail.com"
        // displayName: string,
        // organizer: boolean,
        // self: boolean,
        // resource: boolean,
        // optional: boolean,
        // responseStatus: string,
        // comment: string,
        // additionalGuests: integer
      },
      { email: "wavumiyox@mail-group.net" }
    ]
  };

  await insertEvent(gapi, payload);
  await getCalendar(gapi);
};

const logout = () => {
  // this.afAuth.auth.signOut();
};

const getCalendar = async gapi => {
  const events = await gapi.client.calendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: "startTime"
  });

  console.log({ events });

  // this.calendarItems = events.result.items;
};

const insertEvent = async (
  gapi,
  { attendees, start, end, summary, description }
) => {
  await gapi.client.calendar.events.insert({
    calendarId: "primary",
    start,
    end,
    summary,
    description,
    attendees,
    sendUpdates: "all"
  });
};

const Sidebar = ({ send, state, firebase, meetingId }) => {
  React.useEffect(() => {
    var config = {
      selector: "h1",
      account: "JAMlBJ"
    };

    window.Headway && window.Headway.init(config);
  }, []);

  const [expanded, setExpanded] = React.useState(true);

  const [attendees, setAttendees] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [summary, setSummary] = React.useState("");
  const [dateTime, setDateTime] = React.useState("");
  const [timezone, setTimezone] = React.useState("");

  console.log("dateTime", dateTime);
  return (
    <div className={`flex ${expanded && "w-50 shadow-1 z-1"}`}>
      <aside
        className={`flex flex-column justify-around h-100 bg-white ${
          expanded ? " items-start " : "items-center fixed"
        }`}
      >
        {state.matches("confirmed") ? (
          <Play
            onClick={() => {
              send("STARTED");
              firebase
                .firestore()
                .doc(`meetings/${meetingId}`)
                .update({
                  status: "active"
                })
                .catch(console.error);
            }}
            className="pointer"
          />
        ) : state.matches("active") ? (
          <Stop
            className="pointer "
            onClick={() => {
              send("ENDED");
              firebase
                .firestore()
                .doc(`meetings/${meetingId}`)
                .update({
                  status: "complete"
                })
                .catch(console.error);
            }}
          />
        ) : (
          <span />
        )}

        <h1
          className="ph4 flex"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            textAlign: "center",
            fontSize: "23px",
            textTransform: "uppercase",
            fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif',
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "700",
            lineHeight: "23px",
            color: " #363d87"
          }}
        >
          {summary || "Meetbox"}

          <span id="HW_badge_cont" className="pointer">
            <span id="HW_badge" />
          </span>
        </h1>

        {state.matches("draft") ? (
          <div>
            {expanded ? (
              <FormPreviousLink
                color="#D4D4D4"
                size="large"
                className="pointer ml3"
                onClick={() => setExpanded(false)}
              />
            ) : (
              <FormNextLink
                color="#D4D4D4"
                size="large"
                className="pointer"
                onClick={() => setExpanded(true)}
              />
            )}
          </div>
        ) : (
          <span />
        )}
      </aside>

      {expanded && (
        <div className="w-full max-w-xs flex flex-col justify-around h-full">
          {state.matches("draft.loggedIn") && (
            <div>
              <p className="text-center text-gray-500 text-sm">
                Want to share the editable draft before finalising? <br />
                Just share the current URL.
              </p>
              <p className="text-center text-gray-400 underline text-blue-500 hover:text-blue-800 text-xs">
                http://localhost:3000/meeting/hImci0s9I0OLYAB0YWQB
              </p>
            </div>
          )}

          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-auto"
            onSubmit={e => {
              console.log("frog");
              e.preventDefault();
              setAttendees([...attendees, { email }]);
              console.table({
                start: {
                  dateTime: hoursFromNow(2),
                  timeZone: "America/Los_Angeles"
                },
                end: {
                  dateTime: hoursFromNow(3),
                  timeZone: "America/Los_Angeles"
                },
                summary: "Have Fun!!!",
                description: "Do some cool stuff and have a fun time doing it",

                attendees: [
                  {
                    email: "pittman.joshua@gmail.com"
                  },
                  { email: "wavumiyox@mail-group.net" }
                ]
              });
              setEmail("");
            }}
          >
            <div className="mb-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Meeting Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                value={summary}
                placeholder="Keep it super short."
                onChange={e => setSummary(e.target.value)}
              />
            </div>

            <div className="mb3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="timezone"
              >
                {timezone ? `Timezone: ${timezone}` : "Confirm Your Timezone"}
              </label>

              <WorldMap
                className="h-auto"
                id="timezone"
                color="neutral-1"
                onSelectPlace={([lat, lon]) => {
                  const timezone = tzlookup(lat, lon);
                  setTimezone(timezone);
                }}
                selectColor="accent-2"
              />
            </div>

            <div className="pb-5 mb-6 bb">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="startDate"
              >
                Start Date & Time
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="startDate"
                type="datetime-local"
                // value={dateTime}
                onChange={e => {
                  console.log("change", e.currentTarget.value, {
                    dateTime: hoursFromNow(2),
                    timeZone: "America/Los_Angeles"
                  });
                }}
                min={new Date()}
              />
            </div>

            {/* {state.matches("draft.loggedIn") && ( */}
            {state.matches("draft.loggedOut") && (
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Invitee Email Address
                </label>
                <input
                  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={email}
                  placeholder="attendee@email.com"
                  onChange={e => setEmail(e.target.value)}
                />

                {attendees && attendees.length > 0 ? (
                  <ul className="h-16 overflow-y-auto">
                    {attendees.map(({ email }) => (
                      <li key={email}>
                        <FormClose
                          className="ph-4 cursor-pointer"
                          onClick={() =>
                            setAttendees(
                              attendees.filter(person => person.email !== email)
                            )
                          }
                        />
                        {email}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 text-xs italic pt-3">
                    Gmail users will get a calendar invite, everyone else gets
                    an email invite.{" "}
                  </p>
                )}
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"

                // onClick={() => {
                //   send("SAVED_DRAFT");
                //   firebase
                //     .firestore()
                //     .doc(`meetings/${meetingId}`)
                //     .update({
                //       status: "confirmed"
                //     })
                //     .catch(console.error);
                // }}
              >
                {/* Finalise */}
                Send
              </button>
              {/* <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                htmlForgot Password?
              </p> */}
            </div>
          </form>

          {/* {state.matches("draft.loggedOut") && (
            <div className="flex flex-col items-center">
              <p className="text-center text-gray-500 text-sm">
                If you'd like to send out Google Calendar Invites...
              </p>

              <Button
                className="mt3 pa2 ph4"
                icon={<Google color="plain" />}
                label="Connect to Google"
                onClick={() => login(window.gapi, send)}
              />
            </div>
          )} */}
        </div>
      )}
    </div>
  );
};
export default Sidebar;
