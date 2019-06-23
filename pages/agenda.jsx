import { Button, RadioButton } from "grommet";
import { Add } from "grommet-icons";
import { useState } from "react";
import Layout from "../components/Layout";
const propTypes = {};

const defaultProps = {};

export default function index() {
  const [items, setItems] = useState([{ id: 0 }]);
  return (
    <Layout>
      <section className="flex  vh-100 w-100">
        <aside className="title">
          <h1 className="ph4 ">Agenda</h1>
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
      <style jsx>
        {`
          .title {
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            text-align: center;
            font-size: 4rem;
            text-transform: uppercase;

            font-family: Futura, "Trebuchet MS", Arial, sans-serif;
            font-size: 23px;
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

function AgendaItem({ index }) {
  const [items, setItems] = useState([{ id: 0 }]);
  const [showNotes, setShowNotes] = useState(false);
  return (
    <div className={`flex items-center item${index}`}>
      <dl className="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l pa3">
        <dd className="f3 fw6 ml0 ttu">5</dd>
        <dd className="f6 fw4 ml0 ttu">min</dd>
      </dl>
      <div className="measure">
        <h2>Agenda Item Name</h2>
        {/* <p>
          description - Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p> */}
      </div>
      <div className="ml5 ma3">
        {items.map((item, index) => (
          <div className="ma3">
            <RadioButton
              checked={false}
              label="check me off once discussed"
              onChange={event => console.log(event.target.checked)}
            />
          </div>
        ))}

        <div className="ma3 pl2">
          <Button
            icon={<Add size="small" />}
            label="Add Talking Point"
            onClick={() => setItems([...items, { id: +new Date() }])}
            plain
          />
        </div>
      </div>
      <div className="ml5 ma3 w5 h3 pointer" onClick={() => setShowNotes(true)}>
        {showNotes && (
          <div className="ma3">
            <Button
              icon={<Add />}
              label="Add Notes, Tasks, Votes Or Decisions"
              onClick={() => setItems([...items, { id: +new Date() }])}
              plain
            />
          </div>
        )}
      </div>
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
