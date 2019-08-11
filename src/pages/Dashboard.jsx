import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import React from "react";
import { authState } from "rxfire/auth";
import { notfication$ } from "../components/Banner";
import firebase from "../utilities/firebase";
import stateMachine from "../utilities/statechart";

const propTypes = {};

const defaultProps = {};

export default function Dashboard({ history }) {
  const [send] = useMachine(stateMachine);

  const [user, setUser] = React.useState("loading");

  React.useEffect(() => {
    const userListener = authState(firebase.auth()).subscribe(user => {
      if (!user) {
        authState(firebase.auth()).subscribe(() => history.push("/"));
        return;
      }
      setUser(user);
    });
    return () => userListener.unsubscribe();
  }, [history]);

  return (
    <div className="flex-ns" data-testid="dashboardPage">
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
        Dashboard
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
            label={<small className="washed-red small-caps ml3">Logout</small>}
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
      </article>
    </div>
  );
}

Dashboard.propTypes = propTypes;
Dashboard.defaultProps = defaultProps;
