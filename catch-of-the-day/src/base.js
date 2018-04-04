import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYkURLYA79hhY4nCdSkvH99k21mDETjmQ",
  authDomain: "catch-of-the-day-jaw.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jaw.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this a named export
export { firebaseApp };

// this is a default export
export default base;