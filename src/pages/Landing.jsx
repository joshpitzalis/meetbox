import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import { Google } from "grommet-icons";
import React from "react";
import { authState } from "rxfire/auth";
import { notfication$ } from "../components/Banner";
// import rocket from "../styles/images/rocket.svg";
import firebase from "../utilities/firebase";
import stateMachine from "../utilities/statechart";

const Landing = ({ history }) => {
  const [, send] = useMachine(stateMachine);

  React.useEffect(() => {
    window.analytics.page('"Landing Page"');
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
          {/* <img
            className="w-auto h4 di"
            src={rocket}
            alt="team rocket building"
          /> */}
          <Start firebase={firebase} send={send} history={history} />
        </header>
        <Features />
      </article>
    </div>
  );
};

export default Landing;

function Features({ firebase, send, history }) {
  return (
    <ul className="list pl0 w-50-ns w-100 dn db-l mt3">
      <li className="pa3 pa4-ns mv4 item0 flex rf-x">
        {/* <Schedule className="ma3" size="large" /> */}
        <span className="f1 b text-gray-700 mr3 flex items-center">1.</span>
        <b className="db f3 mb1 text-gray-700 h3">
          Create and collaborate on an agenda for your next meeting. Send out
          Google calendar invites once you're done.
        </b>
      </li>
      <li className="pa3 pa4-ns mv4 item1 br2 flex rf-x">
        {/* <Notes className="ma3" size="large" /> */}
        <span className="f1 b text-gray-700 mr3 flex items-center">2.</span>
        <b className="db f3 mt2 text-gray-700 h3">
          During the meeting, you can assign tasks and take notes about what
          happens.
        </b>
      </li>
      <li className="pa3 pa4-ns mv4 item2 br2 flex rf-x ">
        {/* <Task className="ma3 " size="large" /> */}
        <span className="f1 b text-gray-700 mr3 flex items-center">3.</span>
        <b className="db f3 mb1 text-gray-700 h3">
          When the meeting is over, share everything instantly so that everyone
          knows what they have to do.
        </b>
      </li>
      {/* <span className="flex rf-x">
        <Start firebase={firebase} send={send} history={history} />
      </span> */}
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
            window.analytics.track("new_agenda-created", {
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

          const checkForUser = async user => {
            const existingUser = await firebase
              .firestore()
              .doc(`users/${user.uid}`)
              .get()
              .then(doc => doc.data())
              .catch(error => error);

            if (existingUser === undefined) {
              return true;
            }
          };
          try {
            const googleAuth = gapi.auth2.getAuthInstance();
            const googleUser = await googleAuth.signIn();
            const token = googleUser.getAuthResponse().id_token;
            const credential = auth.GoogleAuthProvider.credential(token);
            const signedIn = await auth().signInWithCredential(credential);
            const { user } = signedIn;
            const noUserExists = await checkForUser(user);

            if (noUserExists) {
              await firebase
                .firestore()
                .doc(`users/${user.uid}`)
                .set({
                  name: user.displayName,
                  email: user.email,
                  uid: user.uid,
                  photoURL: user.photoURL
                })
                .then(() =>
                  analytics.identify(user.uid, {
                    id: user.uid,
                    email: user.email,
                    avatar: user.photoURL,
                    created_at: new Date(),
                    first_name: "Joe",
                    plan_name: "free",
                    name: user.displayName,
                    meeting_attended: 0,
                    meeting_created: 0
                  })
                )
                .catch(error => {
                  const message = error.message || error;
                  notfication$.next({
                    type: "ERROR",
                    message
                  });
                });

              return;
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
