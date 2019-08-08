import { CheckBox } from "grommet";
import React from "react";

export const SelectedTaskList = ({
  selectedList: { name, id, minutes, tasks } = {},
  setFullscreen,
  setIndex,
  index,
  firebase,
  meetingId
}) => {
  return (
    <div
      className={`h-auto w-100 item${index % 12} absolute br2 pa4`}
      style={{
        top: "9rem",
        left: "9rem"
      }}
      onClick={event => event.stopPropagation()}
    >
      <button
        className="underline small-caps pointer"
        onClick={() => {
          setIndex(index);
          setFullscreen("");
        }}
      >
        <small className="tc relative">Close...</small>
      </button>

      <article className="cf ph3 ph5-ns pv5 h-auto">
        <header className="fn fl-ns w-50-ns pr4-ns">
          <h1 className="bw2 ba b--near-black" />
          <h1 className="f2 lh-title fw9 mb3 mt0 pt3 ">{name}</h1>
          <h2 className="f4 mb3 mt4 lh-title">Task List</h2>

          {tasks &&
            Object.values(tasks).map(({ name, taskId, complete }) => (
              <div
                className="flex items-center mb2 measure-narrow"
                key={taskId}
              >
                <CheckBox
                  className="mr2 checkmark"
                  type="checkbox"
                  id={taskId}
                  label={name}
                  checked={complete}
                  onClick={event => {
                    firebase
                      .firestore()
                      .doc(`meetings/${meetingId}`)
                      .update({
                        [`items.${id}.tasks.${taskId}.complete`]: event.target
                          .checked
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
            ))}
        </header>
        <div className="fn fr-ns w-50-ns h-auto">
          <p className="f5 lh-copy measure mt0-ns pt4 h-auto">
            {minutes
              ? minutes.split("\n").map((item, index) => (
                  <span key={`${item.substring(0, 1)}${index}`}>
                    {item}
                    <br />
                  </span>
                ))
              : "No minutes for this item."}
          </p>
        </div>
      </article>
    </div>
  );
};
