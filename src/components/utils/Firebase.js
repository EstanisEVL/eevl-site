import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApq7guSCFFomT8C5u9uY7VYtj2TRYy6es",
  authDomain: "portfolio-aa765.firebaseapp.com",
  projectId: "portfolio-aa765",
  storageBucket: "portfolio-aa765.appspot.com",
  messagingSenderId: "694262663643",
  appId: "1:694262663643:web:38ba9910f3b1f57ed0bffe",
};

export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore();
