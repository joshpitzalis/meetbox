import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD0_c1V4vvrHVwVD941n_KLnbj55f0c5gI",
  authDomain: "decision-dev.firebaseapp.com",
  databaseURL: "https://decision-dev.firebaseio.com",
  projectId: "decision-dev",
  storageBucket: "decision-dev.appspot.com",
  messagingSenderId: "1006893299756",
  appId: "1:1006893299756:web:0581850d4e51ba77"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export default firebase;

// export default async function loadDb() {
//   const firebase = await import("firebase/app");
//   await import("@firebase/firestore");

//   try {
//     // if (!firebase.apps.length) {
//     firebase.initializeApp({
//       apiKey: "AIzaSyD0_c1V4vvrHVwVD941n_KLnbj55f0c5gI",
//       authDomain: "decision-dev.firebaseapp.com",
//       databaseURL: "https://decision-dev.firebaseio.com",
//       projectId: "decision-dev",
//       storageBucket: "decision-dev.appspot.com",
//       messagingSenderId: "1006893299756",
//       appId: "1:1006893299756:web:0581850d4e51ba77"
//     });
//     // } else {
//     //   firebase.app();
//     // }
//   } catch (err) {
//     // we skip the "already exists" message which is
//     // not an actual error when we're hot-reloading
//     if (!/already exists/.test(err.message)) {
//       console.error("Firebase initialization error", err.stack);
//     }
//   }

//   return firebase.firestore();
// }
