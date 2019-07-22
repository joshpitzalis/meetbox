import { Button, WorldMap } from "grommet";
import { FormClose, Google } from "grommet-icons";
import React from "react";
import tzlookup from "tz-lookup";

const hourFrom = startTime => {
  const start = new Date(startTime).getTime();
  const end = new Date(start + 1 * 1000 * 60 * 60).toISOString();
  return end;
};

const login = async (gapi, send) => {
  try {
    const googleAuth = gapi.auth2.getAuthInstance();
    await googleAuth.signIn();
    send("CALENDAR_CONNECTED");
  } catch (error) {
    console.error("error signing in", error);
  }
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

const handleSubmit = async ({
  summary,
  timezone,
  dateTime,
  error,
  setError,
  hourFrom,
  attendees,
  state,
  insertEvent,
  gapi,
  firebase,
  meetingId,
  setExpanded,
  send
}) => {
  if (!summary) {
    setError({ ...error, title: "You need a title." });
    return;
  }
  if (!timezone && state.matches("draft.loggedIn")) {
    setError({ ...error, timezone: "Select a timezone." });
    return;
  }
  if (!dateTime && state.matches("draft.loggedIn")) {
    setError({
      ...error,
      dateTime: "Set a date and time for the meeting."
    });
    return;
  }

  try {
    if (state.matches("draft.loggedIn")) {
      const payload = {
        summary,
        start: {
          dateTime: new Date(dateTime).toISOString(),
          timezone
        },
        end: {
          dateTime: hourFrom(dateTime),
          timezone
        },
        attendees
      };

      await insertEvent(gapi, payload);
    }
    await firebase
      .firestore()
      .doc(`meetings/${meetingId}`)
      .update({
        status: "confirmed",
        summary
      });
    send("SAVED_DRAFT");
    setExpanded(false);
  } catch (error) {
    console.log("setting meeting error", error);
  }
};

const SubmitForm = ({
  url,
  state,
  send,
  setExpanded,
  summary,
  setSummary,
  meetingId,
  firebase
}) => {
  const [attendees, setAttendees] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [dateTime, setDateTime] = React.useState("");
  const [timezone, setTimezone] = React.useState("");
  const [error, setError] = React.useState({});

  const { gapi } = window;

  return (
    <div
      className="w-full max-w-xs flex flex-col justify-around h-full"
      data-testid="agendaSubmitForm"
    >
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-auto">
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Meeting Description
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error.title &&
              "border-red-500"}`}
            id="description"
            type="text"
            value={summary}
            placeholder="Keep it super short."
            onChange={e => {
              setSummary(e.target.value);
              setError({});
            }}
          />
          {error.title && (
            <p className="text-red-500 text-xs italic">{error.title}</p>
          )}
        </div>

        {state.matches("draft.loggedIn") && (
          <ConnectedForm
            timezone={timezone}
            setTimezone={setTimezone}
            setError={setError}
            setDateTime={setDateTime}
            email={email}
            setAttendees={setAttendees}
            attendees={attendees}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
            error={error}
            summary={summary}
            dateTime={dateTime}
            hourFrom={hourFrom}
            state={state}
            insertEvent={insertEvent}
            firebase={firebase}
            meetingId={meetingId}
            setExpanded={setExpanded}
            send={send}
            gapi={gapi}
          />
        )}

        {state.matches("draft.loggedOut") && (
          <div className="flex flex-col items-start tc mt5">
            <p className="text-gray-500 text-sm mb2 tl">
              To send out calendar invites...
            </p>
            <Button
              className=" pv2 "
              plain
              icon={<Google color="plain" />}
              label="Connect to Google"
              onClick={() => login(gapi, send)}
            />

            <p
              className="text-gray-500 underline  hover:text-blue-800 text-sm mt5 underline pointer"
              onClick={() => send("URL_ONLY")}
            >
              No Googles, give me a link to share.
            </p>
          </div>
        )}

        <div>
          {state.matches("draft.linkOnly") && (
            <button
              className={`mt4 text-white font-bold py-2 px-4 rounded focus:outline-none ${
                Object.keys(error).length > 0
                  ? "bg-red-800 hover:bg-red-700 focus:shadow-none"
                  : "bg-blue-800 hover:bg-blue-700 focus:shadow-outline"
              }`}
              type="button"
              onClick={() => send("FINALISED")}
            >
              Finalise Agenda
            </button>
          )}

          {state.matches("draft.confirm") && (
            <>
              <button
                className={`mt4 text-white font-bold py-2 px-4 rounded focus:outline-none ${
                  Object.keys(error).length > 0
                    ? "bg-red-800 hover:bg-red-700 focus:shadow-none"
                    : "bg-blue-800 hover:bg-blue-700 focus:shadow-outline"
                }`}
                type="button"
                onClick={() =>
                  handleSubmit({
                    summary,
                    timezone,
                    dateTime,
                    error,
                    setError,
                    hourFrom,
                    attendees,
                    state,
                    insertEvent,
                    gapi,
                    firebase,
                    meetingId,
                    setExpanded,
                    send
                  })
                }
              >
                {/* Finalise Agenda */}
                Confirm Finalisation
              </button>

              <p className=" text-sm light-red mt1">
                Once an agenda is finalised it will no longer be editable.
                Confirm to proceed.
              </p>
            </>
          )}

          {(state.matches("draft.linkOnly") ||
            state.matches("draft.confirm")) && (
            <>
              <p className="text-gray-500 text-sm mt4">
                If you want to share an editable draft before finalising you can
                share the current URL.
              </p>
              <p className="text-gray-400 underline text-blue-500 hover:text-blue-800 text-xs">
                {url}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;

function ConnectedForm({
  timezone,
  setTimezone,
  setError,
  setDateTime,
  email,
  setAttendees,
  attendees,
  setEmail,
  handleSubmit,
  error,
  summary,
  dateTime,
  hourFrom,
  state,
  insertEvent,
  firebase,
  meetingId,
  setExpanded,
  send,
  gapi
}) {
  return (
    <>
      <div className="mb3">
        {error.timezone ? (
          <p className="text-red-500 text-xs italic">{error.timezone}</p>
        ) : (
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="timezone"
          >
            {timezone ? `Timezone: ${timezone}` : "Confirm Your Timezone"}
          </label>
        )}

        <WorldMap
          className="h-auto"
          id="timezone"
          color={error.timezone ? "red" : "neutral-1"}
          onSelectPlace={async ([lat, lon]) => {
            const timezone = await tzlookup(lat, lon);
            setTimezone(timezone);
          }}
          selectColor="accent-2"
          onClick={() => setError({})}
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
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
                ${error.dateTime && "border-red-500"}`}
          id="startDate"
          type="datetime-local"
          onChange={e => {
            const datestamp = e.currentTarget.value;
            setDateTime(datestamp);
            setError({});
          }}
        />
        {error.dateTime && (
          <p className="text-red-500 text-xs italic">{error.dateTime}</p>
        )}
      </div>

      <form
        onSubmit={e => {
          e.preventDefault();

          if (!email) {
            return;
          }

          setAttendees([
            ...attendees,
            {
              email
            }
          ]);
          setEmail("");
        }}
      >
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
              Gmail users will get a calendar invite, everyone else gets an
              email invite.{" "}
            </p>
          )}
        </div>
      </form>
      <div className="flex items-center justify-between">
        <button
          className={`text-white font-bold py-2 px-4 rounded focus:outline-none ${
            Object.keys(error).length > 0
              ? "bg-red-800 hover:bg-red-700 focus:shadow-none"
              : "bg-blue-800 hover:bg-blue-700 focus:shadow-outline"
          }`}
          type="button"
          onClick={() =>
            handleSubmit({
              summary,
              timezone,
              dateTime,
              error,
              setError,
              hourFrom,
              attendees,
              state,
              insertEvent,
              gapi,
              firebase,
              meetingId,
              setExpanded,
              send
            })
          }
        >
          {Object.keys(error).length > 0 ? "Complete the form first" : "Send"}
        </button>
      </div>
    </>
  );
}
