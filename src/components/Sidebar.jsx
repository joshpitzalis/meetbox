import { FormPreviousLink, Halt, Launch, Save } from "grommet-icons";
import React from "react";
import SubmitForm from "../features/calendar/components/SubmitForm";

const Sidebar = ({
  send,
  state,
  firebase,
  meetingId,
  title,
  itemLength,
  savedDateTime
}) => {
  React.useEffect(() => {
    var config = {
      selector: "h1",
      account: "JAMlBJ"
    };

    window.Headway && window.Headway.init(config);
  }, []);

  console.log("savedDateTime", savedDateTime);
  const [expanded, setExpanded] = React.useState(false);
  const [summary, setSummary] = React.useState(title);
  const [dateTime, setDateTime] = React.useState(
    savedDateTime && savedDateTime.seconds ? savedDateTime.seconds : 0
  );
  return (
    <div
      className={`flex flex-column flex-row-ns 
      fixed-ns vh-100-ns ${expanded && "shadow-1 z-1 vh-100 pr4 bg-white"}`}
      data-testid="sidebar"
    >
      <aside
        className={`
         flex flex-row md:flex-col lg:flex-col flex-column-ns
         justify-around h-100-ns bg-white w-100 w-auto-ns 
         ${expanded ? "items-start" : "items-center "}
         `}
      >
        {state.matches("confirmed") ? (
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
        ) : state.matches("active") ? (
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
        ) : (
          <span className="w3" />
        )}

        <h1
          className="ph4-ns pa3 pv0-ns rotate-ns flex items-center"
          style={{
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
                    <small
                      className="ttu tc b mt3"
                      style={{ color: "#D4D4D4" }}
                    >
                      Save <br />
                      Draft
                    </small>
                    <Save color="#D4D4D4" size="large" className="ma3" />
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          // !!savedDateTime && (
          //   <div>
          //     <dl class={`dib mr3 pa3 text-gray-700`}>
          //       <dd class="f6 f4-ns b ml0">{format(dateTime, "MMM")}</dd>
          //       <dd class="f3 f2-ns b ml0 mt2">{format(dateTime, "Do")}</dd>
          //     </dl>
          //   </div>
          // )
          <span />
        )}
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
