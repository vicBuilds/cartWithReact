//latest version use imports like below
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOkgNVWBwLZhm945WvN2Ic7dp5yAVr_1k",
  authDomain: "cart-app-73169.firebaseapp.com",
  projectId: "cart-app-73169",
  storageBucket: "cart-app-73169.appspot.com",
  messagingSenderId: "586127378004",
  appId: "1:586127378004:web:b8a801de2bbef72e22cfc1",
};

//latest version initiliaze and export db like this below
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
