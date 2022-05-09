// Import the functions you need from the SDKs you need in your app.
// importo la configuracion de firebase de la carpeta compat que me da compativilidad con la sintaxis de la V8 de firebase para que no de error
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNG5kVPTMs6Xf6O1UOQXX1V78Q2DnUzLc",
  authDomain: "requiem-show.firebaseapp.com",
  projectId: "requiem-show",
  storageBucket: "requiem-show.appspot.com",
  messagingSenderId: "541207039792",
  appId: "1:541207039792:web:c449722e340155540942f5",
  measurementId: "G-7NKW72MBH1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
