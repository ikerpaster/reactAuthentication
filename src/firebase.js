import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;

// apiKey: "AIzaSyASz4XEpBSq--FjaEBgDTYMwO96dfbpH60",
// authDomain: "loginana-9543d.firebaseapp.com",
// projectId: "loginana-9543d",
// storageBucket: "loginana-9543d.appspot.com",
// messagingSenderId: "405896525212",
// appId: "1:405896525212:web:197e50dab392d398038459"
