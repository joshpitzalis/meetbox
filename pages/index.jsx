import { useMachine } from "@xstate/react";
import { Button } from "grommet";
import { useState } from "react";
import Layout from "../components/Layout";
import stateMachine from "../static/statechart";

export default function index(props) {
  const [current, send] = useMachine(stateMachine);
  const [sent, setSent] = useState(false);

  console.log("state", current.value);
  return (
    <Layout>
      <div className="vh-100 vw-100 flex items-center justify-center">
        <Button
          autoFocus
          label={sent ? "Creating..." : "Create A New Agenda"}
          onClick={() => {
            setSent(true);
            send("NEW_AGENDA_CREATED");
          }}
        />
      </div>
    </Layout>
  );
}
