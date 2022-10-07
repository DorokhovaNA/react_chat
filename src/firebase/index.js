import { initializeApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBfqb0DecmSsgY_r05gR6HP2Lv16PFVKmI",
  authDomain: "gb-react-628c1.firebaseapp.com",
  projectId: "gb-react-628c1",
  storageBucket: "gb-react-628c1.appspot.com",
  messagingSenderId: "755336690900",
  appId: "1:755336690900:web:e50cdda7c502b8bc890f41",
};

export const app = initializeApp(firebaseConfig);
export const authFirebase = firebaseAuth;
