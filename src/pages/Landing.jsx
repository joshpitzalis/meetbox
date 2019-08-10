import { useMachine } from "@xstate/react";
import { Google } from "grommet-icons";
import React from "react";
import { notfication$ } from "../components/Banner";
// import rocket from "../styles/images/rocket.svg";
import firebase from "../utilities/firebase";
import stateMachine from "../utilities/statechart";

const Landing = ({ history }) => {
  React.useEffect(() => {
    window.analytics.page('"Landing Page"');
  }, []);

  const [, send] = useMachine(stateMachine);

  return (
    <div className="flex-ns" data-testid="landingPage">
      <div className="vh-100-ns flex justify-center">
        <h1 className="ph4-ns pa3 rotate-ns sidebar">Meetbox</h1>
      </div>
      <article className=" w-100 flex flex-wrap flex-grow-1">
        <header className="w-50-ns w-100 tl flex items-center">
          <h1 className="titleText lh-title tc tl-ns pa4-ns pl5-ns relative bottom-2 top--2">
            Turn team meetings into action plans.
          </h1>
          {/* <img
            className="w-auto h4 di"
            src={rocket}
            alt="team rocket building"
          /> */}
          {/* <Start firebase={firebase} send={send} history={history} /> */}
        </header>
        <Features
          firebase={firebase}
          notfication$={notfication$}
          history={history}
          send={send}
        />
      </article>
    </div>
  );
};

export default Landing;

function Features({ firebase, notfication$, history, send }) {
  const features = [
    {
      count: "1.",
      body: `Create and collaborate on an agenda for your next meeting. Send out
    Google calendar invites once you're done.`
    },
    {
      count: "2.",
      body: `During the meeting, you can assign tasks and take notes about what
    happens.`
    },
    {
      count: "3.",
      body: `When the meeting is over, share everything instantly so that everyone
    knows what they have to do.`
    }
  ];
  return (
    <ul className="list pl0 w-50-ns w-100 db mt3 mt0-ns pa4-ns flex flex-column justify-center relative left--2">
      {features.map(({ count, body }, index) => (
        <li
          className={`pa3 pa4-ns mv3-ns item${index} flex rf-x br3`}
          key={`${index}${new Date()}`}
        >
          <span className="f1 b text-gray-700 mr3 flex items-center">
            {count}
          </span>
          <b className="db f3 mb1 text-gray-700 rf-min-h3">{body}</b>
        </li>
      ))}

      <span className="flex rf-x mt3">
        <button
          className="rf-btn "
          onClick={() =>
            send({
              type: "SIGNED_IN",
              payload: {
                firebase,
                gapi: window.gapi,
                analytics: window.analytics,
                notfication$,
                history
              }
            })
          }
        >
          <Google color="plain" className="mr3" />
          Get Started
        </button>
      </span>
    </ul>
  );
}

// function Start({ firebase, send, history }) {
//   const [user, setUser] = React.useState("loading");

//   React.useEffect(() => {
//     const userListener = authState(firebase.auth()).subscribe(user =>
//       setUser(user)
//     );
//     return () => userListener.unsubscribe();
//   }, []);

//   if (user === "loading") {
//     return <Button label="Loading..." plain disbaled />;
//   } else if (user) {
//     return (
//       <>
//         <Button
//           primary
//           label="Create An Agenda To Begin"
//           onClick={() => {
//             window.analytics.track("new_agenda-created", {
//               category: "User",
//               action: "NEW_AGENDA_CREATED"
//             });
//             send({
//               type: "NEW_AGENDA_CREATED",
//               payload: history
//             });
//           }}
//         />
//         <Button
//           plain
//           label={<small className="washed-red small-caps ml3">Logout</small>}
//           onClick={async () => {
//             const { auth } = firebase;
//             try {
//               await auth().signOut();
//             } catch (error) {
//               const message = error.message || error;
//               notfication$.next({
//                 type: "ERROR",
//                 message
//               });
//             }
//           }}
//         />
//       </>
//     );
//   } else {
//     return (
//       <button
//         className="rf-btn"
//         onClick={() => onSignUp(firebase, window.gapi, window.analytics)}
//       >
//         <Google color="plain" className="mr3" />
//         Get Started
//       </button>
//     );
//   }
// }
