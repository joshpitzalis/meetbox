import { FormClose } from "grommet-icons";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ConnectedForm = ({
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
  gapi,
  description,
  duration,
  setDuration
}) => {
  return (
    <>
      <DateAndTime
        dateTime={dateTime}
        setError={setError}
        setDateTime={setDateTime}
        error={error}
      />
      <Duration duration={duration} setDuration={setDuration} />
      <PeopleForm
        email={email}
        setAttendees={setAttendees}
        attendees={attendees}
        setEmail={setEmail}
        setError={setError}
        error={error}
      />

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
              send,
              description,
              duration
            })
          }
        >
          {Object.keys(error).length > 0 ? "Complete the form first" : "Send"}
        </button>
      </div>
    </>
  );
};

export default ConnectedForm;

const DateTime = ({ value, onClick, error }) => {
  return (
    <input
      className={`
      shadow appearance-none border  rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline pointer w-100
      ${!value ? "text-gray-500" : "text-gray-700"}
      ${error && "border-red-500"}`}
      onClick={onClick}
      value={value || "When ?"}
      readOnly
    />
  );
};

function PeopleForm({
  email,
  setAttendees,
  attendees,
  setEmail,
  setError,
  error
}) {
  return (
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
      <div class="flex items-center border-b border-b-2 border-blue-800 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="email"
          placeholder="Invitee's Email Address"
          aria-label="email address"
          value={email}
          onChange={e => {
            setError({});
            setEmail(e.target.value);
          }}
        />

        <button
          class="flex-shrink-0 border-transparent border-4 text-blue-800 hover:blue-teal-800 text-sm py-1 px-2 rounded"
          type="submit"
        >
          Add
        </button>
      </div>

      <div className="mb-4 mt3">
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
        ) : error && error.attendee ? (
          <p className="text-red-500 text-xs italic">{error.attendee}</p>
        ) : (
          <p className="text-gray-600 text-xs italic pt-3">
            Gmail users will get a calendar invite, everyone else gets an email
            invite.{" "}
          </p>
        )}
      </div>
    </form>
  );
}

function Duration({ duration, setDuration }) {
  return (
    <div className="pb-5 mb-6 bb flex items-center text-gray-700">
      <dl
        class={`dib mr3 pa3  ${
          duration === 25 ? "br2 ba bw2" : "o-50 pointer"
        }`}
        onClick={() => setDuration(25)}
      >
        <dd class="f3 f2-ns b ml0">25</dd>
        <dd class="f6 f5-ns b ml0">Minutes</dd>
      </dl>

      <dl
        class={`dib mr5 pa3 ${duration === 50 ? "br2 ba bw2" : "o-50 pointer"}`}
        onClick={() => setDuration(50)}
      >
        <dd class="f3 f2-ns b ml0">50</dd>
        <dd class="f6 f5-ns b ml0">Minutes</dd>
      </dl>
    </div>
  );
}

function DateAndTime({ dateTime, setError, setDateTime, error }) {
  return (
    <div className="pb-5">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="startDate"
      >
        Date & Time
      </label>
      <DatePicker
        customInput={<DateTime error={error.dateTime} />}
        selected={dateTime}
        onChange={datestamp => {
          setError({});
          setDateTime(datestamp);
        }}
        minDate={new Date()}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        timeIntervals={15}
      />

      {error.dateTime && (
        <p className="text-red-500 text-xs italic">{error.dateTime}</p>
      )}
    </div>
  );
}
