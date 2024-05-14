// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmgLg00dCckmEkLKFMCztLwYYxQaTLPHs",
  authDomain: "myecom-95ba9.firebaseapp.com",
  projectId: "myecom-95ba9",
  storageBucket: "myecom-95ba9.appspot.com",
  messagingSenderId: "1048267685230",
  appId: "1:1048267685230:web:d3164db76b13e57e50557f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB= getFirestore(app);

const auth=getAuth(app);

export {auth,fireDB}