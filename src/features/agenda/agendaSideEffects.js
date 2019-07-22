import { debounceTime, tap } from "rxjs/operators";

export const handleMinutesTextUpdate = (
  e,
  setValue,
  setSaved,
  meetingId,
  itemId,
  firebase,
  textInput$
) => {
  setValue(e.target.value);
  textInput$.next(e.target.value);
  setSaved(false);
  textInput$
    .pipe(
      debounceTime(2000),
      tap(
        text =>
          firebase
            .firestore()
            .doc(`meetings/${meetingId}`)
            .update({
              [`items.${itemId}.minutes`]: text
            }) // .then(() => {
        //   console.log("saved");
        //   setSaved(true);
        // })
        // .catch(error => console.error(error))
      )
    )
    .subscribe(text => setSaved(true));
};
