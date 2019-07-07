import { useMachine } from "@xstate/react";
import { Button, Clock } from "grommet";
import { Add } from "grommet-icons";
import Router from "next/router";
import { useState } from "react";
import { Machine } from "xstate";
import Layout from "../components/Layout";
import { AgendaItem } from "../features/agenda/components/AgendaItem";
import firebase from "../sideEffects/firebase";

const createAgenda = event => {
  const doc = firebase
    .firestore()
    .collection("meetings")
    .doc();
  console.log("doc.id", doc.id);
  return Router.push(`/meeting/${doc.id}`);
};

// export const createMeeting = async event => {
//   const { payload } = event;
//   const options = {
//     options: JSON.stringify(payload)
//   };

//   const doc = firebase
//     .firestore()
//     .collection("meetings")
//     .doc();

//   await doc.set({
//     ...options
//   });
//   return doc.id;
// };

const propTypes = {};

const defaultProps = {};

const agendaMachine = Machine({
  id: "agenda",
  initial: "temporary",
  states: {
    temporary: {
      on: { AGENDA_CREATED: "creatingAgendaPage" }
    },
    creatingAgendaPage: {
      invoke: {
        id: "createAgenda",
        src: (context, event) => createAgenda(event),
        onDone: {
          target: "created"
          // The resolved data is placed into a 'done.invoke.<id>' event, under the data property http://bit.ly/2Ft2WR8
        },
        onError: {
          target: "failure"
        }
      }
    },
    created: {
      on: {
        CONFIRMED_TIMES: "temporary",
        ADDED_NEW_DATE: "temporary"
      }
    },
    failure: { type: "final" }

    // loading: {
    //   invoke: {
    //     id: "createMeeting",
    //     src: (context, event) => createMeeting(event),
    //     onDone: {
    //       target: "ready"
    //       // The resolved data is placed into a 'done.invoke.<id>' event, under the data property http://bit.ly/2Ft2WR8
    //     },
    //     onError: {
    //       target: "failure"
    //     }
    //   }
    // },
    // ready: {
    //   on: { SELECTED_A_DATE: "confirmed" }
    // },
    // confirmed: {
    //   type: "final"
    // },
  }
});

export default function index() {
  const [items, setItems] = useState([{ id: 0 }]);
  const [current, send] = useMachine(agendaMachine);
  const handleCreateAgenda = () => send({ type: "AGENDA_CREATED" });

  return (
    <Layout>
      {(current.value === "temporary" || current.value === "created") && (
        <section className="flex  vh-100 w-100">
          <aside className=" flex flex-column justify-around">
            <button>Add people</button>
            <h1 className="ph4 title">Agenda</h1>
            <button onClick={handleCreateAgenda} className="pointer">
              Create Agenda
            </button>
          </aside>
          <div className="flex-grow-1 w-100 flex flex-column">
            {items.map((item, index) => (
              <AgendaItem index={index} key={item.id} />
            ))}
            <div className="pa5   tc flex items-center justify-center grow">
              <Button
                icon={<Add />}
                primary
                label="Add Agenda Item"
                onClick={() => setItems([...items, { id: +new Date() }])}
              />
            </div>
          </div>
        </section>
      )}

      {current.value === "creatingAgendaPage" && (
        <div className="vh-100 vw-100 flex items-center justify-center">
          <Clock type="digital" />
        </div>
      )}

      {current.value === "failure" && (
        <div className="vh-100 vw-100 flex items-center justify-center">
          FAILURE
        </div>
      )}

      <style jsx>
        {`
          .title {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            text-align: center;
            font-size: 4rem;
            text-transform: uppercase;

            font-family: Futura, "Trebuchet MS", Arial, sans-serif;
            font-size: 23px !important;
            font-style: normal;
            font-variant: normal;
            font-weight: 700;
            line-height: 23px;
            color: #363d87;
          }
        `}
      </style>
    </Layout>
  );
}

index.propTypes = propTypes;
index.defaultProps = defaultProps;
