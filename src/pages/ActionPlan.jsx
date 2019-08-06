import { CheckBox } from "grommet";
import React from "react";
import ReactGA from "react-ga";
// import Overdrive from "react-overdrive";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { CompletedMinutes } from "./CompletedMinutes";
import { SelectedTaskList } from "./TaskListPage";

const truncate = (name, count) =>
  name && name.length > count ? `${name.substr(0, count)}...` : name;

const ActionPlan = ({
  send,
  meeting,
  meetingId,
  current,
  firebase,
  handleAddMeeting,
  disabled
}) => {
  const [fullscreen, setFullscreen] = React.useState("");
  const [index, setIndex] = React.useState("");
  // const onlyListsThatHaveTasks = item =>
  //   item && item.tasks && Object.values(item.tasks).length > 0;

  const listWithTasks =
    meeting &&
    meeting.items &&
    Object.values(meeting.items).filter(
      item => item && item.tasks && Object.values(item.tasks).length > 0
    );

  React.useEffect(() => {
    if (listWithTasks.length === 0) {
      send("REDIRECTED_TO_MINUTES_VIEW");
    }
  }, []);

  const selectedList =
    fullscreen &&
    meeting &&
    meeting.items &&
    Object.values(meeting.items).find(item => item.id === fullscreen);

  return (
    <div
      className="ml6-ns  w-100 vh-100 "
      onClick={() => setFullscreen("")}
      data-testid="actionPlanPage"
    >
      {current.matches("complete.actionPlan") && (
        <ReactGA.OutboundLink
          className="navy flex items-center justify-center pa4 w-100"
          eventLabel="typeform"
          to="https://joshpitzalis.typeform.com/to/HCWJeW"
          target="_blank"
          trackerNames={["tracker2"]}
        >
          <span className="lh-title ml3 tc pointer">
            What problem is Meetbox not yet solving for your team ?{" "}
            <span className="underline">We need to know.</span>
          </span>
        </ReactGA.OutboundLink>
      )}
      <p className="dn-ns dib w-100">
        <CompletedMinutes
          meeting={meeting}
          meetingId={meetingId}
          current={current}
          firebase={firebase}
          handleAddMeeting={handleAddMeeting}
          disabled={disabled}
        />
      </p>
      {fullscreen ? (
        <SelectedTaskList
          setFullscreen={setFullscreen}
          selectedList={selectedList}
          setIndex={setIndex}
          index={index}
          firebase={firebase}
          meetingId={meetingId}
        />
      ) : (
        <section className="flex-grow-1 w-100 flex flex-wrap justify-start w-100">
          {listWithTasks &&
            listWithTasks.map((props, index) => (
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
      )}
    </div>
  );
};

export default ActionPlan;

// const compare = (prevProps, nextProps) => {
//   console.log({ prevProps, nextProps });
//   return prevProps && nextProps && prevProps.tasks !== nextProps.tasks;
// };

export const TaskList = ({
  id,
  name,
  index,
  meetingId,
  tasks,
  setFullscreen,
  setIndex,
  firebase
}) => {
  const taskArray = Object.values(tasks);
  const unfinishedTaskCount =
    taskArray && taskArray.filter(tasks => tasks.complete === false).length;
  return (
    <div>
      <div className="dn flex-ns flex-column flex-grow-1 ma3-ns mv4-ns w-100 w5-ns">
        <div
          className={` ba flex flex-column w5 vh-50 br1 bw5 b--item${index +
            1} item${index + 1} overflow-hidden word-wrap pointer`}
          onClick={event => {
            event.stopPropagation();
            setIndex(index + 1);
            setFullscreen(id);
          }}
        >
          <div className="flex-grow-1">
            <div className="flex items-baseline">
              {!!unfinishedTaskCount && (
                <span className="rf-badge dn di-ns mr2">
                  {unfinishedTaskCount}
                </span>
              )}
              <p className="fw7 mb4 f3 lh-solid">{truncate(name, 30)}</p>
            </div>

            <hr />
            {tasks &&
              taskArray
                .sort((a, b) => {
                  if (a.complete > b.complete) return 1;
                  if (b.complete > a.complete) return -1;
                  return 0;
                })
                .map(({ name, taskId, complete }) => {
                  return (
                    <div className="flex items-center mb2 z-1" key={taskId}>
                      <CheckBox
                        className="mr2 checkmark"
                        type="checkbox"
                        id={taskId}
                        label={truncate(name, 35)}
                        checked={complete}
                        onClick={event => {
                          console.log({ taskId });
                          firebase
                            .firestore()
                            .doc(`meetings/${meetingId}`)
                            .update({
                              [`items.${id}.tasks.${taskId}.complete`]: event
                                .target.checked
                            })
                            .then(() =>
                              ReactGA.event({
                                category: "User",
                                action: "Toggled Task"
                              })
                            )
                            .catch(error => console.error(error));
                          event.stopPropagation();
                        }}
                      />
                    </div>
                  );
                })}
          </div>
        </div>
        <button
          className="small-caps pointer"
          onClick={event => {
            event.stopPropagation();
            setIndex(index + 1);
            setFullscreen(id);
          }}
        >
          <small className="tc  silver">more...</small>
        </button>
      </div>
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
