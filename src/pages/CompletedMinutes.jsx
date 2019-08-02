import { Button } from "grommet";
import { Add, Save } from "grommet-icons";
import React from "react";
import ReactGA from "react-ga";
import AgendaItem from "../features/agenda/components/AgendaItem";
export function CompletedMinutes({
  meeting,
  meetingId,
  current,
  firebase,
  handleAddMeeting,
  disabled
}) {
  return (
    <div className="flex-grow-1 w-100 flex flex-column">
      {meeting &&
        meeting.items &&
        Object.values(meeting.items).map((props, index) => (
          <AgendaItem
            key={props.id}
            {...props}
            meetingId={meetingId}
            index={index}
            state={current}
            firebase={firebase}
          />
        ))}
      {current.matches("complete.minutes") && (
        <ReactGA.OutboundLink
          className="bg-lightest-blue navy flex items-center justify-center pa4 w-100"
          eventLabel="typeform"
          to="https://joshpitzalis.typeform.com/to/HCWJeW"
          target="_blank"
          trackerNames={["tracker2"]}
        >
          <span className="lh-title ml3 tc pointer grow">
            🚀 What problem would you like Meetbox to solve that it is not
            currently solving? 🚀{" "}
            <span className="underline">We need to know</span>
          </span>
        </ReactGA.OutboundLink>
      )}
      {(current.matches("draft") || current.matches("active")) && (
        <div className="pa5 tc w-100">
          <Button
            icon={<Add />}
            className={`pointer dim`}
            size="large"
            primary
            label="Add An Agenda Item"
            onClick={() => handleAddMeeting(meetingId)}
            disabled={disabled}
          />
          {meeting && meeting.items && Object.values(meeting.items).length > 0 && (
            <div className="pv3 flex-ns items-center justify-center dn ">
              <small className="o-50">When you're done, click the</small>
              <Save className="ph1" color="#D4D4D4" />
              <small className="o-50">
                {" "}
                icon in the bottom left corner to save.
              </small>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
