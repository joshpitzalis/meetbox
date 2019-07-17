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

  const [expanded, setExpanded] = React.useState(false);
  const [summary, setSummary] = React.useState(title);
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
