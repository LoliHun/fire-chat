import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAO6SHRi2OLoshpI_FjEQEnmhHNo6VDeBE",
    authDomain: "fypchat-7477a.firebaseapp.com",
    projectId: "fypchat-7477a",
    storageBucket: "fypchat-7477a.appspot.com",
    messagingSenderId: "891839665302",
    appId: "1:891839665302:web:4f91250378c61bc0751eb7"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
