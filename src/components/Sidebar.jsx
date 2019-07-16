import { Button, Layer } from "grommet";
import { Google, Play, Send, Stop } from "grommet-icons";
import React from "react";

const login = async (gapi, send) => {
  const googleAuth = gapi.auth2.getAuthInstance();
  const googleUser = await googleAuth.signIn();

  const token = googleUser.getAuthResponse().id_token;
  send("CALENDAR_CONNECTED");

  // const credential = auth.GoogleAuthProvider.credential(token);

  console.log({ googleUser, token });

  getCalendar(gapi);
};

const logout = () => {
  // this.afAuth.auth.signOut();
};

const getCalendar = async gapi => {
  const events = await gapi.client.calendar.events.list({
    calendarId: "primary",
    timeMin: new Date().toISOString(),
    showDeleted: false,
    singleEvents: true,
    maxResults: 10,
    orderBy: "startTime"
  });

  console.log({ events });

  // this.calendarItems = events.result.items;
};

const hoursFromNow = n =>
  new Date(Date.now() + n * 1000 * 60 * 60).toISOString();

const insertEvent = async gapi => {
  const insert = await gapi.client.calendar.events.insert({
    calendarId: "primary",
    start: {
      dateTime: hoursFromNow(2),
      timeZone: "America/Los_Angeles"
    },
    end: {
      dateTime: hoursFromNow(3),
      timeZone: "America/Los_Angeles"
    },
    summary: "Have Fun!!!",
    description: "Do some cool stuff and have a fun time doing it"
  });

  await this.getCalendar();
};

const Sidebar = ({ send, state, firebase, meetingId }) => {
  console.log("state", state.value);
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    var config = {
      selector: "h1",
      account: "JAMlBJ"
    };

    window.Headway.init(config);
  }, []);
  return (
    <aside className="flex flex-column justify-around items-center fixed h-100 bg-white ">
      {// state === "confirmed"
      state.matches("confirmed") ? (
        <Play
          onClick={() => {
            send("STARTED");
            firebase
              .firestore()
              .doc(`meetings/${meetingId}`)
              .update({
                status: "active"
              })
              .catch(console.error);
          }}
          className="pointer"
        />
      ) : state.matches("active") ? (
        // state === "active"
        <Stop
          className="pointer "
          onClick={() => {
            send("ENDED");
            firebase
              .firestore()
              .doc(`meetings/${meetingId}`)
              .update({
                status: "complete"
              })
              .catch(console.error);
          }}
        />
      ) : (
        <span />
      )}

      <h1
        className="ph4 flex"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
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
        <span id="HW_badge_cont" className="pointer">
          <span id="HW_badge" />
        </span>
      </h1>

      {state.matches("draft") ? (
        // state === "draft"
        <div>
          <Send
            label="show"
            className="pointer "
            onClick={() => setShow(true)}
          />

          {show && (
            <Layer
              onEsc={() => setShow(false)}
              onClickOutside={() => setShow(false)}
              className="pa5-ns pa3 flex justify-center sans-serif"
            >
              <p className=" w5">
                If you'd like to share it before finalising just share the url.
              </p>

              <Send
                className="pointer"
                onClick={() => {
                  send("SAVED_DRAFT");
                  firebase
                    .firestore()
                    .doc(`meetings/${meetingId}`)
                    .update({
                      status: "confirmed"
                    })
                    .catch(console.error);
                }}
              />

              <p className="w5">
                If you'd like to send out Google Calendar Invites instead, log
                in with your Google Account.
              </p>

              <Button
                icon={<Google color="plain" />}
                label="Login with Google"
                onClick={() => login(window.gapi, send)}
              />
            </Layer>
          )}
        </div>
      ) : (
        <span />
      )}
    </aside>
  );
};
export default Sidebar;
