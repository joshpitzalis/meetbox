import { CheckBox } from "grommet";
import React from "react";
import ReactGA from "react-ga";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { SelectedTaskList } from "./TaskListPage";

const truncate = (name, count) =>
  name && name.length > count ? `${name.substr(0, count)}...` : name;

const ActionPlan = ({ send, meeting, meetingId, current, firebase }) => {
  const [fullscreen, setFullscreen] = React.useState("");
  const [index, setIndex] = React.useState("");
  const onlyListsThatHaveTasks = item =>
    item && item.tasks && Object.values(item.tasks).length > 0;
  const selectedList =
    fullscreen &&
    meeting &&
    meeting.items &&
    Object.values(meeting.items).find(item => item.id === fullscreen);
  return (
    <div className="ml6  w-100 vh-100 ">
      {current.matches("complete.actionPlan") && (
        <ReactGA.OutboundLink
          className="navy flex items-center justify-center pa4 w-100"
          eventLabel="typeform"
          to="https://joshpitzalis.typeform.com/to/HCWJeW"
          target="_blank"
          trackerNames={["tracker2"]}
        >
          <span className="lh-title ml3 tc pointer grow">
            What problem would you like Meetbox to solve next?{" "}
            <span className="underline">We need to know.</span>
          </span>
        </ReactGA.OutboundLink>
      )}
      <section className="flex-grow-1 w-100 flex flex-wrap w-100">
        {meeting &&
          meeting.items &&
          Object.values(meeting.items)
            .filter(onlyListsThatHaveTasks)
            .map((props, index) => (
              <TaskList
                key={props.id}
                {...props}
                meetingId={meetingId}
                index={index}
                state={current}
                firebase={firebase}
                setFullscreen={setFullscreen}
                setIndex={setIndex}
              />
            ))}{" "}
      </section>
      {fullscreen && (
        <SelectedTaskList
          setFullscreen={setFullscreen}
          selectedList={selectedList}
          setIndex={setIndex}
          index={index}
        />
      )}
    </div>
  );
};

export default ActionPlan;

export const TaskList = ({
  id,
  name,
  prep,
  index,
  meetingId,
  state,
  minutes,
  tasks,
  setFullscreen,
  setIndex
}) => {
  return (
    <div className="flex flex-column ma3 mv4">
      <div
        className={` ba flex flex-column w5 vh-50 br1 bw5 b--item${index +
          1} item${index + 1} overflow-hidden word-wrap pointer`}
        onClick={() => {
          setIndex(index + 1);
          setFullscreen(id);
        }}
      >
        <div className="flex-grow-1">
          <p className="fw7 mb4 f3 lh-solid">{truncate(name, 30)}</p>

          <hr />
          {tasks &&
            Object.values(tasks).map(({ name }) => (
              <div className="flex items-center mb2 z-1" key={name}>
                <CheckBox
                  className="mr2 checkmark"
                  type="checkbox"
                  id={name}
                  label={truncate(name, 35)}
                  checked={true}
                  onClick={event => event.stopPropagation()}
                />
              </div>
            ))}
        </div>
      </div>
      <button
        className="small-caps pointer"
        // onClick={() => setFullscreen(id)}
      >
        <small className="tc relative silver">more...</small>
      </button>
    </div>
  );
};

export const TeamStats = () => (
  <section className="pa3 pa5-ns" data-name="slab-stat-small">
    {/* <h3 className="f6 ttu tracked">Project Stats</h3> */}
    <div className="cf">
      <dl className="db dib-l w-auto-l lh-title mr6-l">
        {/* useful for finding github issues count history */}
        {/* https://9-volt.github.io/bug-life/?repo=joshpitzalis/tinyteams */}
        <Sparklines
          data={[3, 12, 13, 8, 9, 10, 12, 21, 19, 22, 32, 46, 55, 51, 71, 73]}
        >
          <SparklinesLine style={{ fill: "none" }} />
        </Sparklines>
        <dd className="f6 fw4 ml0">Github Issues</dd>
        <dd className="f7 fw4 ml0 o-30">Last updated 24 March</dd>
        <dd className="f2 f-subheadline-l fw6 ml0">73</dd>
      </dl>
      <dl className="db dib-l w-auto-l lh-title mr6-l">
        <Sparklines data={[0, 2]}>
          <SparklinesLine style={{ fill: "none" }} />
        </Sparklines>
        <dd className="f6 fw4 ml0">Email Subscribers</dd>
        <dd className="f7 fw4 ml0 o-30">Last updated 24 March</dd>
        <dd className="f2 f-subheadline-l fw6 ml0">2</dd>
      </dl>
    </div>
  </section>
);
