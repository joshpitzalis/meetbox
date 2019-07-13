import { Button } from "grommet";
import React from "react";
export function ConfirmDelete({ deleteItem, id, meetingId, setConfirm }) {
  return (
    <div className="h5 flex flex-column items-center justify-center w-100 bg-light-red white">
      <p className="f3">You sure you want to delete this item ?</p>
      <div className="w-100 flex justify-center">
        <Button
          label="Confirm Deletion"
          onClick={() => {
            deleteItem(id, meetingId);
            setConfirm(false);
          }}
          className="pointer mh5 white b--white"
        />
        <div className="w3" />
        <Button
          label="No, I've changed my mind."
          onClick={() => setConfirm(false)}
          className="pointer"
          plain
        />
      </div>
    </div>
  );
}
