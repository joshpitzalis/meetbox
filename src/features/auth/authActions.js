export const onSignup = async (
  firebase,
  gapi,
  analytics,
  notfication$,
  history
) => {
  const { auth } = firebase;

  const checkForUser = async user => {
    const existingUser = await firebase
      .firestore()
      .doc(`users/${user.uid}`)
      .get()
      .then(doc => doc.data())
      .catch(error => error);

    if (existingUser === undefined) {
      return true;
    }
  };
  try {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();
    const token = googleUser.getAuthResponse().id_token;
    const credential = auth.GoogleAuthProvider.credential(token);
    const signedIn = await auth().signInWithCredential(credential);
    const { user } = signedIn;
    const noUserExists = await checkForUser(user);

    if (noUserExists && user && user.uid) {
      await firebase
        .firestore()
        .doc(`users/${user.uid}`)
        .set({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL
        })
        .then(() =>
          analytics.identify(user.uid, {
            id: user.uid,
            email: user.email,
            avatar: user.photoURL,
            created_at: new Date(),
            first_name: "Joe",
            plan_name: "free",
            name: user.displayName,
            meeting_attended: 0,
            meeting_created: 0
          })
        )
        .then(() => {
          console.log("frog 1");
          history.push(`/dashboard/${user.uid}`);
        })
        .catch(error => {
          const message = error.message || error;
          notfication$.next({
            type: "ERROR",
            message
          });
        });

      return;
    }

    if (user && user.uid) {
      console.log("frog 2");
      history.push(`/dashboard/${user.uid}`);
      return;
    }

    throw new Error("No user Id");
  } catch (error) {
    const message = error.message || error;
    notfication$.next({
      type: "ERROR",
      message
    });
  }
};
