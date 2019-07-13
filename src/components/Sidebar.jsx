import { Play, Send, Stop } from "grommet-icons";
import React from "react";

const Sidebar = ({ send, state, firebase, meetingId }) => {
  const [dialogue, toggleDialogue] = React.useState(false);
  return (
    <aside className="flex flex-column justify-around items-center fixed vh-100 bg-white">
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
        className="ph4"
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
        Meetbox <span className="f6">0.0.1</span>
      </h1>
      {state === "draft" ? (
        <Send className="pointer " onClick={() => toggleDialogue(true)} />
      ) : (
        <span />
      )}

      {dialogue && (
        <dialog>
          <h3>I'm a dialog</h3>

          <p>Look at me.</p>
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
        </dialog>
      )}
    </aside>
  );
};
export default Sidebar;
