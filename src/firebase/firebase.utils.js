import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD5vCy24vtEXE8GEWTUNaulwcxiLM-Z4Lc",
  authDomain: "crwn-db-87766.firebaseapp.com",
  projectId: "crwn-db-87766",
  storageBucket: "crwn-db-87766.appspot.com",
  messagingSenderId: "1076930097032",
  appId: "1:1076930097032:web:5befbaeb94fbaff97d143d",
  measurementId: "G-VK92CFZH1X",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
