import { FormNextLink, FormPreviousLink, Play, Stop } from "grommet-icons";
import React from "react";
import SubmitForm from "../features/calendar/components/SubmitForm";

const Sidebar = ({ send, state, firebase, meetingId, title }) => {
  React.useEffect(() => {
    var config = {
      selector: "h1",
      account: "JAMlBJ"
    };

    window.Headway && window.Headway.init(config);
  }, []);

  const [expanded, setExpanded] = React.useState(true);
  const [summary, setSummary] = React.useState(title);
  return (
    <div
      className={`flex flex-column flex-row-ns fixed-ns vh-100-ns  ${
        expanded ? "shadow-1 z-1 vh-100 pr4 bg-white" : "w-100"
      }`}
    >
      <aside
        className={`
         flex flex-row md:flex-col lg:flex-col flex-column-ns
         justify-around h-100-ns bg-white w-100 w-auto-ns 
         ${expanded ? "items-start" : "items-center "}
         `}
      >
        {state.matches("confirmed") ? (
          <Play
            data-testid="playButton"
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
            data-testid="stopButton"
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
                onClick={() => setExpanded(false)}
              />
            ) : (
              <FormNextLink
                color="#D4D4D4"
                size="large"
                className="pointer ma3"
                onClick={() => setExpanded(true)}
                data-testid="saveAgenda"
              />
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
        />
      )}
    </div>
  );
};
export default Sidebar;
