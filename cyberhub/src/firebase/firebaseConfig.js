import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAFuCOuh21C1sKSLGExxdpKm-ZP8yRgijY",

  authDomain: "hartyo-4ef40.firebaseapp.com",

  databaseURL: "https://hartyo-4ef40-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "hartyo-4ef40",

  storageBucket: "hartyo-4ef40.firebasestorage.app",

  messagingSenderId: "499688783540",

  appId: "1:499688783540:web:45b7607e9693d62815e1e1",

  measurementId: "G-KMG3FBQQ0B"

};

console.log("Firebase project:", import.meta.env.VITE_FIREBASE_PROJECT_ID);
console.log(
  "Firebase API key exists:",
  Boolean(import.meta.env.VITE_FIREBASE_API_KEY)
);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;