import {
  FormClose,
  FormPreviousLink,
  Halt,
  Launch,
  Save,
  ShareOption
} from "grommet-icons";
import PropTypes from "prop-types";
import React from "react";
import SubmitForm from "../features/calendar/components/SubmitForm";
import minutes from "../styles/images/minutes.svg";
import { notfication$ } from "./Banner";
import Modal from "./Modal";

const titleStyle = {
  textAlign: "center",
  fontSize: "23px",
  textTransform: "uppercase",
  fontFamily: 'Futura, "Trebuchet MS", Arial, sans-serif',
  fontStyle: "normal",
  fontVariant: "normal",
  fontWeight: "700",
  lineHeight: "23px",
  color: " #363d87",
  wordBreak: "break-all"
};

const Sidebar = ({
  send,
  state,
  firebase,
  meetingId,
  title,
  itemLength,
  savedDateTime,
  agendaViewAvailable,
  minutesLink
}) => {
  React.useEffect(() => {
    var config = {
      selector: "h1",
      account: "JAMlBJ"
    };

    window.Headway && window.Headway.init(config);
  }, []);

  const [expanded, setExpanded] = React.useState(false);
  const [summary, setSummary] = React.useState(title);
  const [dateTime, setDateTime] = React.useState(
    savedDateTime && savedDateTime.seconds ? savedDateTime.seconds : 0
  );

  return (
    <div
      className={`flex flex-column flex-row-ns 
      fixed-ns vh-100-ns ${expanded && "shadow-1 z-2 vh-100 pr4 bg-white"}`}
      data-testid="sidebar"
    >
      <aside
        className={`
        pv3 ph2 flex flex-row  md:flex-col lg:flex-col flex-column-ns
         justify-between h-100-ns bg-white w-100 w-auto-ns 
         ${expanded ? "items-start" : "items-center "}
         `}
      >
        <TopWidget
          state={state}
          send={send}
          firebase={firebase}
          meetingId={meetingId}
          minutesLink={minutesLink}
        />
        <h1
          className="ph4-ns pa3 pv0-ns rotate-ns flex items-center"
          style={titleStyle}
        >
          {summary || "Meetbox"}
          <span id="HW_badge_cont" className="pointer">
            <span id="HW_badge" />
          </span>
        </h1>

        <BottomWidget
          state={state}
          send={send}
          expanded={expanded}
          setExpanded={setExpanded}
          itemLength={itemLength}
          agendaViewAvailable={agendaViewAvailable}
        />
      </aside>

      {expanded && (
        <SubmitForm
          state={state}
          send={send}
          setExpanded={setExpanded}
          summary={summary}
          setSummary={setSummary}
          firebase={firebase}
          meetingId={meetingId}
          url={
            window &&
            window.location &&
            window.location.href &&
            window.location.href
          }
          dateTime={dateTime}
          setDateTime={setDateTime}
        />
      )}
    </div>
  );
};

export default Sidebar;

const topPropTypes = {
  state: PropTypes.array.isRequired,
  firebase: PropTypes.func.isRequired,
  meetingId: PropTypes.string.isRequired
};

const topDefaultProps = {};

const TopWidget = ({ state, firebase, meetingId, send, minutesLink }) => {
  const [visible, toggleVisibility] = React.useState(false);

  switch (true) {
    case state.matches("active"):
      return (
        <div
          className="flex flex-column items-center pointer grow"
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
        >
          <Halt data-testid="stopButton" color="red" size="large" />
          <small className="dark-red ttu tc b mt3">
            End <br />
            Meeting
          </small>
        </div>
      );
    case state.matches("confirmed"):
      return (
        <div
          className="flex flex-column items-center pointer grow"
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
        >
          <Launch data-testid="playButton" color="green" size="large" />
          <small className="dark-green ttu tc b mt3">
            Start <br />
            Meeting
          </small>
        </div>
      );

    case state.matches("complete"):
      return (
        <>
          <div
            className="flex rf-x rf-col pointer"
            onClick={() => {
              toggleVisibility(!visible);
            }}
            data-testid="shareMinutesButton"
          >
            <ShareOption size="large" />
            <small className="small-caps silver underline">Share</small>
          </div>
          {visible && (
            <Modal>
              <article className="mw5 h-auto center bg-white br3 pa3  mv3 ba b--black-10">
                <FormClose
                  className="fr pointer"
                  data-testid="closeModal"
                  onClick={() => {
                    toggleVisibility(!visible);
                  }}
                />
                <div className="cf" />
                <div className="tc">
                  <img
                    className="w-auto h4 center"
                    src={minutes}
                    alt="people sharing some shapes"
                  />
                </div>

                <EmailForm
                  helperText="Add the email addresses of people you would like to send these
                    minutes to."
                  onSubmit={attendees => {
                    try {
                      attendees.forEach(recipient =>
                        window.analytics.track("beta_test_invite", {
                          recipient: recipient.email,
                          minutesLink
                        })
                      );
                      send({ type: "EMAIL_INVITES_SENT" });
                      toggleVisibility(!visible);
                      notfication$.next({
                        message: "Your minutes have been sent."
                      });
                    } catch (error) {
                      console.error("error", error);
                    }
                  }}
                />
              </article>
            </Modal>
          )}
        </>
      );

    default:
      return <span className="w3" />;
  }
};

TopWidget.propTypes = topPropTypes;
TopWidget.defaultProps = topDefaultProps;

const propTypes = {
  state: PropTypes.array.isRequired,
  send: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func.isRequired,
  itemLength: PropTypes.number.isRequired,
  agendaViewAvailable: PropTypes.bool.isRequired
};

const defaultProps = {};

const BottomWidget = ({
  state,
  send,
  expanded,
  setExpanded,
  itemLength,
  agendaViewAvailable
}) => {
  switch (true) {
    case state.matches("draft"):
      return (
        <div>
          {expanded ? (
            <FormPreviousLink
              color="#D4D4D4"
              size="large"
              className="pointer ma3"
              onClick={() => {
                send("RETURNED");
                setExpanded(false);
              }}
            />
          ) : (
            <>
              {itemLength > 0 && (
                <div
                  className="flex flex-column pointer dim"
                  onClick={() => setExpanded(true)}
                  data-testid="saveAgenda"
                >
                  <small className="ttu tc b mt3" style={{ color: "#D4D4D4" }}>
                    Save <br />
                    Draft
                  </small>
                  <Save color="#D4D4D4" size="large" className="ma3" />
                </div>
              )}
            </>
          )}
        </div>
      );
    case state.matches("complete"):
      return (
        agendaViewAvailable && (
          <button
            className="w3 dn dib-ns"
            onClick={() =>
              send(
                state.matches("complete.actionPlan")
                  ? "REDIRECTED_TO_MINUTES_VIEW"
                  : "REDIRECTED_TO_ACTION_PLAN"
              )
            }
          >
            <small className="silver small-caps  tc">
              {state.matches("complete.actionPlan")
                ? "Switch to the minutes view"
                : "Switch to the Action view"}
            </small>
          </button>
        )
      );

    default:
      return <span />;
    // // !!savedDateTime && (
    // <div>
    //   <dl class={`dib mr3 pa3 text-gray-700`}>
    //     <dd class="f6 f4-ns b ml0">{format(dateTime, "MMM")}</dd>
    //     <dd class="f3 f2-ns b ml0 mt2">{format(dateTime, "Do")}</dd>
    //   </dl>
    // </div>
    // // )
  }
};

BottomWidget.propTypes = propTypes;
BottomWidget.defaultProps = defaultProps;

export const EmailForm = ({ helperText, onSubmit }) => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState({});
  const [attendees, setAttendees] = React.useState([]);
  return (
    <>
      <form
        className="mt3"
        onSubmit={e => {
          e.preventDefault();
          if (!email) {
            setError({
              attendee: "You must enter a recepient."
            });
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
        <div className="flex items-center border-b border-b-2 border-blue-800 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="email"
            placeholder="email@ddress.com"
            aria-label="email address"
            value={email}
            onChange={e => {
              setError({});
              setEmail(e.target.value);
            }}
            onFocus={() => setError({})}
          />

          <button
            className="flex-shrink-0 border-transparent border-4 text-blue-800 hover:blue-teal-800 text-sm py-1 px-2 rounded"
            type="submit"
            data-testid="emailSubmit"
          >
            Add
          </button>
        </div>

        <div className="mb-4 mt3">
          {attendees && attendees.length > 0 ? (
            <ul className="h4 tl overflow-y-scroll black">
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
            <p className="text-gray-600 text-xs italic pt-3">{helperText}</p>
          )}
        </div>
      </form>
      <button
        className="btn btn-blue mv3 dim pointer"
        style={{ backgroundColor: "#373F85" }}
        onClick={() => {
          if (attendees.length === 0) {
            setError({
              attendee: "You must enter a recepient."
            });
            return;
          }
          onSubmit(attendees);
        }}
        data-testid="sendInvites"
      >
        Send
      </button>
    </>
  );
};
