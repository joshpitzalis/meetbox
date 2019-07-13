import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(config);

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// } else {
//   firebase.app();
// }

export default firebase;
