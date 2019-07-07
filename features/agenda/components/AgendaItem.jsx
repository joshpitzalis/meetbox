import { Button, Form, FormField, RadioButton, TextInput } from "grommet";
import { Add } from "grommet-icons";
import { useState } from "react";

const initialState = {
  title: "",
  prerequisites: {}
};

function reducer(state, action) {
  switch (action.type) {
    case "TITLE_UPDATED":
      return { ...state, title: action.payload };
    case "PREREQUISITES_ADDED":
      return {
        ...state,
        prerequisites: {
          ...state.prerequisites,
          [action.payload.id]: action.payload
        }
      };
    case "PREREQUISITE_TOGGLED":
      const prerequisites = { ...state.prerequisites };
      prerequisites[action.payload.id].completed = action.payload.completed;
      return {
        ...state,
        prerequisites
      };
    default:
      return state;
  }
}

export function AgendaItem({ index }) {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className={`flex items-center item${index}`}>
      <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l pa3">
        <dd className="f3 fw6 ml0 ttu">5</dd>
        <dd className="f6 fw4 ml0 ttu">min</dd>
      </dl>
      <AgendaItemName />
      <Prerequisites />
      {showNotes && (
        <div
          className="ml5 ma3 w5 h3 pointer"
          onClick={() => setShowNotes(true)}
        >
          <div className="ma3">
            <Button
              icon={<Add />}
              label="Add Notes, Tasks, Votes Or Decisions"
              onClick={() => setItems([...items, { id: +new Date() }])}
              plain
            />
          </div>
        </div>
      )}

      <style jsx>
        {`
          .item0 {
            background-color: #fdfce7;
          }
          .item1 {
            background-color: #faf4c0;
          }
          .item2 {
            background-color: #e0eac3;
          }
          .item3 {
            background-color: #c6e0d7;
          }
          .item4 {
            background-color: #b2cdd7;
          }
          .item5 {
            background-color: #cbb39e;
          }
          .item6 {
            background-color: #e79c74;
          }
          .item7 {
            background-color: #e49883;
          }
          .item8 {
            background-color: #df9598;
          }
          .item9 {
            background-color: #d1869f;
          }
          .item10 {
            background-color: #bc72a7;
          }
          .item11 {
            background-color: #894f9c;
          }
          .item12 {
            background-color: #3a2a76;
          }
        `}
      </style>
    </div>
  );
}

function AgendaItemName() {
  const [editMode, toggleEditMode] = useState(true);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="measure-wide flex-grow-1">
      {editMode ? (
        <FormField label="Agenda Item" className="measure">
          <TextInput
            placeholder="Give your first agenda Item a name"
            size="large"
            value={state.title}
            onChange={e =>
              dispatch({ type: "TITLE_UPDATED", payload: e.target.value })
            }
          />
        </FormField>
      ) : (
        <h2 onClick={() => toggleEditMode(true)} className="pointer">
          Click to edit agenda Item Name
        </h2>
      )}
    </div>
  );
}

function Prerequisites() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="ml5 ma3 flex-grow-1">
      {Object.values(state.prerequisites).map(item => (
        <div className="ma3">
          <RadioButton
            key={item.id}
            checked={item.completed}
            label={item.name}
            onChange={() => {
              return dispatch({
                type: "PREREQUISITE_TOGGLED",
                payload: {
                  id: item.id,
                  completed: !item.completed
                }
              });
            }}
          />
        </div>
      ))}

      <div className="ma3 pt4 pl2">
        <Form
          size="small"
          onSubmit={({ value }) =>
            dispatch({
              type: "PREREQUISITES_ADDED",
              payload: {
                id: +new Date(),
                completed: false,
                name: value.name
              }
            })
          }
        >
          <FormField
            name="name"
            label="Prep work (optional)"
            placeholder="Describe any prep you need people to do for this item."
            size="small"
          />
          <Button type="submit" label="Add an Prerequisite" />
        </Form>
      </div>
    </div>
  );
}
