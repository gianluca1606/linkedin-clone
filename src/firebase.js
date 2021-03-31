import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCK44-Y-5NYaM2NbLSYjb5vC4KG9KaIGC8",
  authDomain: "linked-in-da07c.firebaseapp.com",
  projectId: "linked-in-da07c",
  storageBucket: "linked-in-da07c.appspot.com",
  messagingSenderId: "322326468619",
  appId: "1:322326468619:web:dd746e6749f9ed4bf38f0e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
