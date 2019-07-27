import { Button } from "grommet";
import React from "react";
export function ConfirmDelete({ deleteItem, id, meetingId, setConfirm }) {
  return (
    <div className="h5 flex flex-column items-center justify-center w-100 bg-light-red white">
      <p className="f3 pl3 pl0-ns mt3">
        You sure you want to delete this item ?
      </p>
      <div className=" flex flex-grow w-100 justify-around mt3 h3">
        <Button
          label="Confirm Deletion"
          onClick={() => {
            deleteItem(id, meetingId);
            setConfirm(false);
          }}
          className="pointer mh5-ns white b--white ma3 "
        />

        <Button
          label="No, I've changed my mind."
          onClick={() => setConfirm(false)}
          className="pointer ma3"
          plain
        />
      </div>
    </div>
  );
}
