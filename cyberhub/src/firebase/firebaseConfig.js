import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  VITE_FIREBASE_API_KEY: "AIzaSyAFuCOuh21C1sKSLGExxdpKm-ZP8yRgijY",
  VITE_FIREBASE_AUTH_DOMAIN: "hartyo-4ef40.firebaseapp.com",
  VITE_FIREBASE_PROJECT_ID: "hartyo-4ef40",
  VITE_FIREBASE_STORAGE_BUCKET: "hartyo-4ef40.appspot.com",
  VITE_FIREBASE_MESSAGING_SENDER_ID: "499688783540",
  VITE_FIREBASE_APP_ID: "1:499688783540:web:45b7607e9693d62815e1e1"
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