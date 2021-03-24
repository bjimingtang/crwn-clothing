import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA7_qTDW-GUd7kQPEvklJqmcSXzgbor5nw",
  authDomain: "crwn-clothing-325d3.firebaseapp.com",
  databaseURL: "https://crwn-clothing-325d3.firebaseio.com",
  projectId: "crwn-clothing-325d3",
  storageBucket: "crwn-clothing-325d3.appspot.com",
  messagingSenderId: "671917445195",
  appId: "1:671917445195:web:b135b4f3a5ed036e897dce",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
