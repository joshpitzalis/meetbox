import { db } from "../../../sideEffects/firebase";

export const createMeeting = async event => {
  const { payload } = event;
  const options = JSON.stringify(payload);

  // randomly generated 5 letter alphanumeric
  const id = Math.random()
    .toString(36)
    .slice(-5);

  await db
    .collection("meetings")
    .doc(id)
    .set({ options })
    .catch(error => error);

  return id;
};

export const selectTime = async (date, time, docId) =>
  db
    .collection("meetings")
    .doc(docId)
    .update({ time, date })
    .catch(error => error);
