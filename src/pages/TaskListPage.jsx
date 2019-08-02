import { CheckBox } from "grommet";
import React from "react";
export function SelectedTaskList({ selectedList: { name, prep, minutes, tasks } = {}, setFullscreen, setIndex, index }) {
  return (<div className={`h-100 w-100 item${index} relative br2 pa4`} style={{
    bottom: "25rem",
    left: "1rem"
  }}>
    <button className="underline small-caps pointer" onClick={() => {
      setIndex(index);
      setFullscreen("");
    }}>
      <small className="tc relative">Go Back...</small>
    </button>


    <article className="cf ph3 ph5-ns pv5">
      <header className="fn fl-ns w-50-ns pr4-ns">
        <h1 className="bw2 ba b--near-black" />
        <h1 className="f2 lh-title fw9 mb3 mt0 pt3 ">{name}</h1>
        <h2 className="f4 mb3 mt4 lh-title">Task List</h2>

        {tasks &&
          Object.values(tasks).map(({ name }) => (<div className="flex items-center mb2 measure-narrow" key={name}>
            <CheckBox className="mr2 checkmark" type="checkbox" id={name} label={name} checked={true} />
          </div>))}
      </header>
      <div className="fn fr-ns w-50-ns">
        <p className="f5 lh-copy measure mt0-ns pt4">
          {minutes
            ? minutes.split("\n").map((item, index) => (<span key={`${item.substring(0, 1)}${index}`}>
              {item}
              <br />
            </span>))
            : "No minutes for this item."}
        </p>
      </div>
    </article>
  </div>);
}
