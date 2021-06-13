import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhtObWmcKhKhfhx60wekW9KZi7lPwowXg",
    authDomain: "crwn-db-a00c3.firebaseapp.com",
    projectId: "crwn-db-a00c3",
    storageBucket: "crwn-db-a00c3.appspot.com",
    messagingSenderId: "319108165677",
    appId: "1:319108165677:web:dbfeb4e0c43b0dc51dc8a4",
    measurementId: "G-1MRGN218W9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;