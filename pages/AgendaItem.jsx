import { Button, RadioButton } from "grommet";
import { Add } from "grommet-icons";
import { useState } from "react";
export function AgendaItem({ index }) {
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
