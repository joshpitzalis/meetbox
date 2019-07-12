import { Play, Send, Stop } from "grommet-icons";
import React from "react";

const Sidebar = ({ send, state }) => {
  return (
    <aside className="flex flex-column justify-around items-center fixed vh-100 bg-white">
      {state === "confirmed" ? (
        <Play
          onClick={() =>
            send({
              type: "STARTED"
            })
          }
          className="pointer"
        />
      ) : state === "active" ? (
        <Stop className="pointer " onClick={() => send("ENDED")} />
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
        <Send className="pointer " onClick={() => send("SAVED_DRAFT")} />
      ) : (
        <span />
      )}
    </aside>
  );
};
export default Sidebar;
