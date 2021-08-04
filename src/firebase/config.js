import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbszyhfB3X0vw2aEvqnjZsW9heXgQcDuA",
    authDomain: "react-sandbox-3cfd4.firebaseapp.com",
    projectId: "react-sandbox-3cfd4",
    storageBucket: "react-sandbox-3cfd4.appspot.com",
    messagingSenderId: "668859340022",
    appId: "1:668859340022:web:366631715c84e9778c88d7"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {firestore};