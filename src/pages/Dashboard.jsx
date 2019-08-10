import { useMachine } from "@xstate/react";
import { CheckBox, Menu } from "grommet";
import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Dashboard = ({ stateMachine }) => {
  const [state] = useMachine(stateMachine);

  React.useEffect(() => {
    window.analytics.page('"Dashboard"');
  }, []);

  switch (true) {
    case state.matches("loggedIn.empty"):
      return (
        <div data-testid="dashboardPage">
          <p>I'm Dashboard a empty</p>
        </div>
      );

    case state.matches("loggedIn.idle"):
      return (
        <div data-testid="dashboardPage" className="ml5">
          {/* <h1> Project Timeline</h1> */}
          <Menu
            // className="actionButton"
            label="Add Meeting"
            size="xlarge"
            items={[
              { label: "Plan a future meeting", onClick: () => {} },
              { label: "I'm about to start a meeting now", onClick: () => {} },
              { label: "Add a past meeting from a URL", onClick: () => {} }
            ]}
          />
          <ul className="timeline">
            <li className="tl-node ">
              {/* <div>
                <dl class={`dib mr3 pa3 text-gray-700`}>
                  <dd class="f6 f4-ns b ml0">{format(new Date(), "MMM")}</dd>
                  <dd class="f3 f2-ns b ml0 mt2">{format(new Date(), "Do")}</dd>
                </dl>
              </div> */}
              <div className="tl-stamp">August 14th, 2019</div>
              <div className="tl-content">Kickoff Meeting</div>
              <a href="#">Meeting Notes</a>
            </li>
            <li className="tl-node">
              <div className="tl-stamp">August 9th, 2019</div>
              <div className="tl-content">Sign contract</div>
              <a href="#">Meeting Notes</a>
            </li>
            <li className="tl-node">
              <div className="tl-stamp">August 7th, 2019</div>
              <div className="tl-content">Initial meeting</div>
              <a href="#">Meeting Notes</a>
            </li>
            <li className="tl-node">
              <div className="tl-stamp">July 13th, 2013</div>
              <div className="tl-content">Initial contact</div>
            </li>
          </ul>
        </div>
      );

    case state.matches("loggedIn.chaos"):
      return (
        <div data-testid="dashboardPage">
          <p>I'm Dashboard a chaos</p>
        </div>
      );
    default:
      console.log("state.value", state.value);
      return <p>Error</p>;
  }
};

export default Dashboard;

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

  const truncate = (name, count) =>
    name && name.length > count ? `${name.substr(0, count)}...` : name;
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
                              window.analytics.track("task_toggled", {
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
