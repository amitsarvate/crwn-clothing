import firebase from "firebase/compat/app";
import "firebase/compat/firestore"; // importing the specific libraries needed
import "firebase/compat/auth"; // (database and authentication...)

const config = {
  apiKey: "AIzaSyD5vCy24vtEXE8GEWTUNaulwcxiLM-Z4Lc",
  authDomain: "crwn-db-87766.firebaseapp.com",
  projectId: "crwn-db-87766",
  storageBucket: "crwn-db-87766.appspot.com",
  messagingSenderId: "1076930097032",
  appId: "1:1076930097032:web:5befbaeb94fbaff97d143d",
  measurementId: "G-VK92CFZH1X",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // exit from function if the user object is null

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // checking if the data exists within the database
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    // creating a new user if doesnt exist within the database using data passed through (using signin form)
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
