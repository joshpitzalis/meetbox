import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID || "meetbox-prod",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(config);

firebase
  .firestore()
  .enablePersistence()
  .then(() => console.log("offline mode active"))
  .catch(function(err) {
    if (err.code == "failed-precondition") {
      console.log("too many tabs open for offline mode to work");
    } else if (err.code == "unimplemented") {
      console.log("current browser does not support offline mode");
    }
  });

export default firebase;