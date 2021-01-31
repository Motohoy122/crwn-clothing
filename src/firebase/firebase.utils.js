import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDbNs44wHDF-hDGDuXHElJEpw1lOAtbHzE",
    authDomain: "crwn-db-c290d.firebaseapp.com",
    projectId: "crwn-db-c290d",
    storageBucket: "crwn-db-c290d.appspot.com",
    messagingSenderId: "1088603906885",
    appId: "1:1088603906885:web:ccf4485656cdd9d79ed42c",
    measurementId: "G-6HMZFMZXVC"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;