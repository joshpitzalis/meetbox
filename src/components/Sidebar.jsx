import { FormPreviousLink, Halt, Launch, Save } from "grommet-icons";
import React from "react";
import SubmitForm from "../features/calendar/components/SubmitForm";

const Sidebar = ({ send, state, firebase, meetingId, title }) => {
  console.log("title", title);
  React.useEffect(() => {
    var config = {
      selector: "h1",
      account: "JAMlBJ"
    };

    window.Headway && window.Headway.init(config);
  }, []);

  const [expanded, setExpanded] = React.useState(false);
  const [summary, setSummary] = React.useState(title);

  return (
    <div
      className={`flex flex-column flex-row-ns fixed-ns vh-100-ns ${expanded &&
        "shadow-1 z-1 vh-100 pr4 bg-white"}`}
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
          className="ph4 rotate-ns flex items-center "
          style={{
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
                className="pointer ma3"
                onClick={() => {
                  send("RETURNED");
                  setExpanded(false);
                }}
              />
            ) : (
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
          </div>
        ) : (
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
        />
      )}
    </div>
  );
};

export default Sidebar;
