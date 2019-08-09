import { useEffect, useState } from "react";
import { doc } from "rxfire/firestore";
import firebase from "../../utilities/firebase";

export const createAgenda = async event => {
  try {
    const doc = firebase
      .firestore()
      .collection("meetings")
      .doc();

    await doc.set({ meetingId: doc.id, status: "draft" });
    return event.payload.push(`/meeting/${doc.id}`);
  } catch (error) {
    console.error({ error });
  }
};

export const useStreamMeeting = meetingId => {
  const stream$ = doc(firebase.firestore().doc(`meetings/${meetingId}`));
  const [meeting, updateMeeting] = useState();

  useEffect(() => {
    const stream = stream$.subscribe(snapshot =>
      updateMeeting(snapshot.data())
    );
    return () => stream.unsubscribe();
  }, [meetingId]);

  return meeting;
};

export const handleAddMeeting = meetingId => {
  const timestamp = +new Date();

  return firebase
    .firestore()
    .doc(`meetings/${meetingId}`)
    .update({
      [`items.${timestamp}.id`]: timestamp
    })
    .catch(error => console.error({ error }));
};

export const deleteItem = (itemId, meetingId) =>
  firebase
    .firestore()
    .doc(`meetings/${meetingId}`)
    .update({
      [`items.${itemId}`]: firebase.firestore.FieldValue.delete()
    })
    .catch(error => console.error(error));

export const handleMinutesTextUpdate = (
  e,
  setValue,
  textInput$,
  setSaved,
  meetingId,
  itemId,
  firebase
) => {
  setValue(e.target.value);
  const payload = {
    text: e.target.value,
    meetingId,
    targetId: itemId,
    firebase,
    setSaved
  };
  textInput$.next(payload);
  window.analytics.track("minutes-updated", {
    category: "User",
    action: "Minutes Updated"
  });

  setSaved(false);
};

export const useSync = (textInput$, itemId, minutes) => {
  const [value, setValue] = useState(minutes);
  useEffect(() => {
    setValue(minutes);
  }, [minutes]);
  useEffect(() => {
    textInput$.subscribe(
      ({ text, meetingId, targetId, firebase, setSaved }) => {
        if (text && itemId === targetId) {
          firebase
            .firestore()
            .doc(`meetings/${meetingId}`)
            .update({
              [`items.${itemId}.minutes`]: text
            })
            .then(() => {
              console.log("saved");
              setSaved(true);
            })
            .catch(error => console.error(error));
        }
      }
    );
    return () => textInput$.unsubscribe();
  }, []);
  return [value, setValue];
};
