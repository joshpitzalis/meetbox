import { Play, Send, Stop } from "grommet-icons";
import React from "react";

const Sidebar = ({ send, state, firebase, meetingId }) => {
  React.useEffect(() => {
    var config = {
      selector: "h1",
      account: "JAMlBJ"
    };

    window.Headway.init(config);
  }, []);
  return (
    <aside className="flex flex-column justify-around items-center fixed h-100 bg-white ">
      {state === "confirmed" ? (
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
      ) : state === "active" ? (
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
        Meetbox
        <span id="HW_badge_cont" className="pointer">
          <span id="HW_badge">1</span>
        </span>
      </h1>

      {state === "draft" ? (
        <div className="button">
          <p className="dn absolute tooltip w5">
            If you'd like to share it before finalising just share the url.
          </p>
          <Send
            className="pointer "
            onClick={() => {
              send("SAVED_DRAFT");
              firebase
                .firestore()
                .doc(`meetings/${meetingId}`)
                .update({
                  status: "confirmed"
                })
                .catch(console.error);
            }}
          />
        </div>
      ) : (
        <span />
      )}
    </aside>
  );
};
export default Sidebar;
