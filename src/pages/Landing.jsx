import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import { Google, Notes, Schedule, Task } from "grommet-icons";
import React from "react";
import ReactGA from "react-ga";
import { authState } from "rxfire/auth";
import { notfication$ } from "../components/Banner";
import firebase from "../utilities/firebase";
import stateMachine from "../utilities/statechart";

const Landing = ({ history }) => {
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

          <Start firebase={firebase} send={send} history={history} />
        </header>
        <Features />
        {/* <article className="mw5 mw6-ns center pt4 list pl0 w-50-ns w-100 dn db-l flex items-end justify-end dn db-l">
          
          
          <img
            className="w-auto h-50 mb3 pb4"
            src={rocket}
            alt="team rocket building"
          />
        </article> */}
      </article>
    </div>
  );
};

export default Landing;

function Features() {
  return (
    <ul className="list pl0 w-50-ns w-100 dn db-l mt3">
      <li className="pa3 pa4-ns mv4 item0 flex x">
        <Schedule className="ma3" size="large" />
        <b className="db f3 mb1 text-gray-700 h3">
          Use it to create and collaborate on an agenda, then send out google
          calendar invites.
        </b>
      </li>
      <li className="pa3 pa4-ns mv4 item1 br2 flex x">
        <Notes className="ma3" size="large" />
        <b className="db f3 mt2 text-gray-700 h3">
          Then take notes on what happens during the meeting.
        </b>
      </li>
      <li className="pa3 pa4-ns mv4 item2 br2 flex x ">
        <Task className="ma3 " size="large" />
        <b className="db f3 mb1 text-gray-700 h3">
          Instantly share everything when the meeting is over so that everyone
          knows what they have to do.
        </b>
      </li>
    </ul>
  );
}

function Start({ firebase, send, history }) {
  const [user, setUser] = React.useState("loading");

  React.useEffect(() => {
    const userListener = authState(firebase.auth()).subscribe(user =>
      setUser(user)
    );
    return () => userListener.unsubscribe();
  }, []);

  if (user === "loading") {
    return <Button label="Loading..." plain disbaled />;
  } else if (user) {
    return (
      <>
        <Button
          primary
          label="Create An Agenda To Begin"
          onClick={() => {
            ReactGA.event({
              category: "User",
              action: "NEW_AGENDA_CREATED"
            });
            send({
              type: "NEW_AGENDA_CREATED",
              payload: history
            });
          }}
        />
        <Button
          plain
          label={<small className="dark-red small-caps ml3">Logout</small>}
          onClick={async () => {
            const { auth } = firebase;
            try {
              await auth().signOut();
            } catch (error) {
              const message = error.message || error;
              notfication$.next({
                type: "ERROR",
                message
              });
            }
          }}
        />
      </>
    );
  } else {
    return (
      <Button
        icon={<Google color="plain" className="ma1" />}
        label="Get Started"
        onClick={async () => {
          const { gapi, analytics } = window;
          const { auth } = firebase;
          try {
            const googleAuth = gapi.auth2.getAuthInstance();
            const googleUser = await googleAuth.signIn();
            const token = googleUser.getAuthResponse().id_token;
            const credential = auth.GoogleAuthProvider.credential(token);
            const signedIn = await auth().signInWithCredential(credential);
            console.log("signedIn", signedIn);
            const newUser = false;
            if (signedIn) {
              const { user } = signedIn;

              if (newUser) {
                analytics.track("new_user", {
                  name: user.displayName,
                  email: user.email
                });
              }
            }
          } catch (error) {
            const message = error.message || error;
            notfication$.next({
              type: "ERROR",
              message
            });
          }
        }}
      />
    );
  }
}
