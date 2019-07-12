import { useMachine } from "@xstate/react";
import { Clock } from "grommet";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import agendaMachine from "../statechart";

export default function index(props) {
  const [current, send] = useMachine(agendaMachine);

  const router = useRouter();

  const { meetingId } = router.query;

  React.useEffect(() => {
    if (!meetingId) {
      send("NEW_AGENDA_CREATED");
    }
  }, [meetingId]);

  return (
    <Layout>
      <div className="vh-100 vw-100 flex items-center justify-center">
        <Clock type="digital" />
      </div>
    </Layout>
  );
}
