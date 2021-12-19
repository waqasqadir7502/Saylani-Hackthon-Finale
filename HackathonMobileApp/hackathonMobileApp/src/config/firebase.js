import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query, where } from "firebase/firestore";

// Optionally import the services that you want to use
// import {
//     getAuth,
//     onAuthStateChanged,
//     FacebookAuthProvider,
//     signInWithCredential,
// } from 'firebase/auth';

//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBfmmlfjGxoJCeS48Ibd6BMZLQEwdPxCeo",
    authDomain: "khana-f0267.firebaseapp.com",
    projectId: "khana-f0267",
    storageBucket: "khana-f0267.appspot.com",
    messagingSenderId: "848758351993",
    appId: "1:848758351993:web:ace4429df1aafdb5e80ca8",
    measurementId: "G-39EJ22KVDW"
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};
