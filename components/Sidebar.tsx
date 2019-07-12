import { Play, Send, Stop } from "grommet-icons";
import React from "react";

const Sidebar = ({ send, state }) => {
  return (
    <aside className=" flex flex-column justify-around items-center fixed vh-100 bg-white">
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
      <h1 className="ph4 title">
        Meetbox <span className="f6">0.0.1</span>
      </h1>
      {state === "draft" ? (
        <Send className="pointer " onClick={() => send("SAVED_DRAFT")} />
      ) : (
        <span />
      )}

      <style jsx>
        {`
          .title {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            text-align: center;
            font-size: 4rem;
            text-transform: uppercase;

            font-family: Futura, "Trebuchet MS", Arial, sans-serif;
            font-size: 23px !important;
            font-style: normal;
            font-variant: normal;
            font-weight: 700;
            line-height: 23px;
            color: #363d87;
          }
        `}
      </style>
    </aside>
  );
};
export default Sidebar;
