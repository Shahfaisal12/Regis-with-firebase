

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUeSwuKsd8uZoR3uU_9Hfj_30iuPBDh-U",
  authDomain: "user-authentication-99b94.firebaseapp.com",
  projectId: "user-authentication-99b94",
  storageBucket: "user-authentication-99b94.appspot.com",
  messagingSenderId: "224192053448",
  appId: "1:224192053448:web:5d3bf3faebaf52e63da5fd"
};

// export var storage = firebase.storage();

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);