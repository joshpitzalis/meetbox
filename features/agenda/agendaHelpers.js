import Router from "next/router";
import firebase from "../../sideEffects/firebase";

export const createAgenda = async event => {
  try {
    const doc = firebase
      .firestore()
      .collection("meetings")
      .doc();

    await doc.set({ meetingId: doc.id });

    return Router.push({
      pathname: `/meeting/${doc.id}`,
      query: {
        meetingId: doc.id
      }
    });
  } catch (error) {
    console.log({ error });
  }
};
