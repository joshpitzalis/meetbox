import firebase from "../../../sideEffects/firebase";

export const createMeeting = async event => {
  const { payload } = event;
  const newDoc = await firebase
    .firestore()
    .collection("meetings")
    .add({ options: JSON.stringify(payload) })
    .catch(error => error);
  return newDoc.id;
};

export const selectTime = async (date, time, docId) =>
  firebase
    .firestore()
    .collection("meetings")
    .doc(docId)
    .update({ time, date })
    .catch(error => error);
