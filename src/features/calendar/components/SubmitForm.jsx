import addMinutes from "date-fns/addMinutes";
import { Button } from "grommet";
import { Google } from "grommet-icons";
import React from "react";
import ConnectedForm from "./ConnectedForm";

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
  duration,
  dateTime,
  error,
  setError,
  attendees,
  state,
  insertEvent,
  gapi,
  firebase,
  meetingId,
  setExpanded,
  send,
  description
}) => {
  if (!summary) {
    setError({ ...error, title: "You need a title." });
    return;
  }

  if (!dateTime && state.matches("draft.loggedIn")) {
    setError({
      ...error,
      dateTime: "Set a date and time for the meeting."
    });
    return;
  }

  if (attendees.length === 0 && state.matches("draft.loggedIn")) {
    setError({
      ...error,
      attendee: "You need to invite atleast one person."
    });
    return;
  }

  try {
    
    if (state.matches("draft.loggedIn")) {
      const payload = {
        description,
        summary,
        start: {
          dateTime: dateTime
        },
        end: {
          dateTime: addMinutes(dateTime, duration)
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
        summary,
        dateTime
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
  firebase,
  dateTime,
  setDateTime
}) => {
  const [attendees, setAttendees] = React.useState([]);
  const [email, setEmail] = React.useState("");

  const [duration, setDuration] = React.useState(25);
  const [error, setError] = React.useState({});

  const { gapi } = window;

  return (
    <div
      className="w-full max-w-xs flex flex-col justify-around h-full"
      data-testid="agendaSubmitForm"
    >
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-auto">
        <Objective
          summary={summary}
          setSummary={setSummary}
          setError={setError}
          error={error}
        />

        {state.matches("draft.loggedIn") && (
          <ConnectedForm
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
            state={state}
            insertEvent={insertEvent}
            firebase={firebase}
            meetingId={meetingId}
            setExpanded={setExpanded}
            send={send}
            gapi={gapi}
            description={url}
            duration={duration}
            setDuration={setDuration}
          />
        )}

        {state.matches("draft.loggedOut") && (
          <div className="flex flex-col items-start tc mt5">
            <p className="text-gray-500 text-sm mb2 tl">
              If you want to send out invites...
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
              No invites, give me a link to share.
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
                    duration,
                    dateTime,
                    error,
                    setError,

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
              <small
                className="text-gray-400 underline"
                style={{
                  wordWrap: "break-word"
                }}
              >
                {url}
              </small>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;

function Objective({ summary, error, setSummary, setError }) {
  return (
    <div className="mb-3">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="description"
      >
        The Meeting's Objective
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error.title &&
          "border-red-500"}`}
        id="description"
        type="text"
        value={summary}
        placeholder="Keep it short and clear."
        onChange={e => {
          setSummary(e.target.value);
          setError({});
        }}
      />

      {error.title && (
        <p className="text-red-500 text-xs italic">{error.title}</p>
      )}
    </div>
  );
}
