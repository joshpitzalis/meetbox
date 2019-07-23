import React, { useState } from "react";

const ItemTime = ({ minutes }) => {
  const [time, setTime] = useState(minutes);
  const [error, setError] = useState("");
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center mr4-l">
        <div
          className="w1 pointer"
          data-testid="dec"
          onClick={() => {
            setError("");
            if (time === 5) {
              setError("5 is the minimum.");
              setTimeout(() => setError(""), 1000);
              return;
            }
            setTime(time - 5);
          }}
        >
          -
        </div>
        <dl className={`fl fn-l w-50 dib-l w-auto-l lh-title  pa3`}>
          <dd className="f3 fw6 ml0 ttu">{time}</dd>
          <dd className="f6 fw4 ml0 ttu">min</dd>
        </dl>
        <div
          className="w1 pointer"
          data-testid="inc"
          onClick={() => {
            setError("");
            setTime(time + 5);
          }}
        >
          +
        </div>
      </div>
      {error && <small className="red">{error}</small>}
    </div>
  );
};

export default ItemTime;
