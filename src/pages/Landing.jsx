import { useMachine } from "@xstate/react";
import React from "react";
import ReactGA from "react-ga";
import stateMachine from "../utilities/statechart";

const Landing = ({ match, history }) => {
  const [, send] = useMachine(stateMachine);

  React.useEffect(() => {
    ReactGA.pageview("/landing");
  }, []);

  return (
    <div className="flex" data-testid="landingPage">
      <div className="vh-100  flex justify-center">
        <h1
          className="ph4 rotate-ns   "
          style={{
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
        </h1>
      </div>
      <article className="pa3 pv4-ns ph5-ns h-screen flex flex-wrap flex-grow-1">
        <header className="w-50-ns w-100 pl3 tl">
          <h1 className="mb-16 font-extrabold mt5 text-5xl text-8xl lh-title ">
            {/* Meetbox.io */}It helps meetings stay on point.
          </h1>
          {/* <h2 className="f3 mid-gray lh-title ">
            A tool to help meetings stay on point.
          </h2> */}

          <button
            className="btn btn-blue mv3 dim pointer"
            style={{ backgroundColor: "#373F85" }}
            onClick={() => {
              ReactGA.event({
                category: "User",
                action: "NEW_AGENDA_CREATED"
              });

              send({ type: "NEW_AGENDA_CREATED", payload: history });
            }}
          >
            Get Started
          </button>
        </header>
        <ul className="list pl0 w-50-ns w-100">
          <li className="pa3 pa4-ns mv2 item0">
            <b className="db f3 mb1">1. Create An Agenda Before The Meeting.</b>
            <span className="f5 db lh-copy measure">
              Use Meetbox to draft a list of everything you want to discuss in
              your next meeting. You can share teh draft with other people that
              might want to add to teh agenda.
            </span>
          </li>
          <li className="pa3 pa4-ns mv2 item1">
            <b className="db f3 mb1">2. Send Out Invites To Attendees.</b>
            <span className="f5 db lh-copy measure">
              Once the agenda is set you'll get a unique URL to share. If you
              choose to connect a Google account then Meetbox will send out
              calendar invites to everyone you invite.
            </span>
          </li>
          <li className="pa3 pa4-ns mv2 item2">
            <b className="db f3 mb1">3. Record Decisions During The Meeting.</b>
            <span className="f5 db lh-copy measure">
              When you start a meeting anyone can take notes and assign tasks on
              each agenda item. You can also park ideas at the bottom of the
              agenda during teh meeting. That way you can stay on point without
              constantly addressing tangents.
            </span>
          </li>
          <li className="pa3 pa4-ns item3 mv2">
            <b className="db f3 mb1">
              4. When You're Done, Share Everything Instantly.
            </b>
            <span className="f5 db lh-copy measure">
              No summary-email-bottleneck-nonsense with Meetbox. When a meeting
              is done, everyone has a link to all the notes and tasks people
              agreed on, instantly.
            </span>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Landing;
