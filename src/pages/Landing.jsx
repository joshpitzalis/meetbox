import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import { Google } from "grommet-icons";
import React from "react";
import ReactGA from "react-ga";
import { notfication$ } from "../components/Banner";
import rocket from "../styles/images/rocket.svg";
import firebase from "../utilities/firebase";
import stateMachine from "../utilities/statechart";

const Landing = ({ match, history }) => {
  const [, send] = useMachine(stateMachine);

  React.useEffect(() => {
    ReactGA.pageview("/landing");
  }, []);

  return (
    <div className="flex-ns" data-testid="landingPage">
      <div className="vh-100-ns flex justify-center">
        <h1
          className="ph4-ns pa3 rotate-ns"
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
          <h1 className="mb-16 font-extrabold mt4 text-5xl text-8xl lh-title ">
            Turn team meetings into action plans.
          </h1>

          <Button
            icon={<Google color="plain" />}
            label="Get Started"
            onClick={async () => {
              const { gapi } = window;
              const { auth } = firebase;
              try {
                const googleAuth = gapi.auth2.getAuthInstance();

                const googleUser = await googleAuth.signIn();

                const token = googleUser.getAuthResponse().id_token;

                const credential = auth.GoogleAuthProvider.credential(
                  token
                );

                await auth().signInWithCredential(credential);

                ReactGA.event({
                  category: "User",
                  action: "NEW_AGENDA_CREATED"
                });

                send({ type: "NEW_AGENDA_CREATED", payload: history });
              } catch (error) {
                console.log("error", error, typeof error);

                notfication$.next({
                  type: "ERROR",
                  message: error.TypeError
                });
              }
            }}
          />
        </header>

        <article className="mw5 mw6-ns center pt4 list pl0 w-50-ns w-100 dn db-l flex items-end justify-end dn db-l">
          <img
            className="w-auto h-50 mb3 pb4"
            src={rocket}
            alt="team rocket building"
          />
        </article>

        {/* <Features /> */}
      </article>
    </div>
  );
};

export default Landing;

function Features({}) {
  return (
    <ul className="list pl0 w-50-ns w-100 dn db-l">
      <li className="pa3 pa4-ns mv4 item0">
        <b className="db f3 mb1 text-gray-700 h3">
          📅 Use it to create and collaborate on an agenda, then send out google
          calendar invites.
        </b>
        {/* <span className="f5 db lh-copy measure">
       Use Meetbox to draft a list of everything you want to discuss in
       your next meeting. You can share teh draft with other people that
       might want to add to teh agenda.
      </span> */}
      </li>
      <li className="pa3 pa4-ns mv4 item1 br2">
        <b className="db f3 mb1 text-gray-700 h3">
          📝 Then take notes on what happens during the meeting.
        </b>
      </li>
      <li className="pa3 pa4-ns mv4 item2 br2 ">
        <b className="db f3 mb1 text-gray-700 h3">
          ✅ Instantly share everything when the meeting is over so that
          everyone knows what they have to do.
        </b>
        {/* <span className="f5 db lh-copy measure">
       When you start a meeting anyone can take notes and assign tasks on
       each agenda item. You can also park ideas at the bottom of the
       agenda during teh meeting. That way you can stay on point without
       constantly addressing tangents.
      </span> */}
      </li>
    </ul>
  );
}
