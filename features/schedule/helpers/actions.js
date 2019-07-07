import firebase from "../../../sideEffects/firebase";

export const createMeeting = async event => {
  const { payload } = event;
  const options = {
    options: JSON.stringify(payload)
  };

  const doc = firebase
    .firestore()
    .collection("meetings")
    .doc();

  await doc.set({
    ...options
  });
  return doc.id;
};

export const selectTime = async (date, time, docId) =>
  firebase
    .firestore()
    .collection("meetings")
    .doc(docId)
    .update({ time, date })
    .catch(error => error);
