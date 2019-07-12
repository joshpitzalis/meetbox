import firebase from "../../sideEffects/firebase";

export const createAgenda = async event => {
  try {
    const doc = firebase
      .firestore()
      .collection("meetings")
      .doc();

    await doc.set({ meetingId: doc.id });
    return event.payload.push(`/meeting/${doc.id}`);
  } catch (error) {
    console.error({ error });
  }
};
