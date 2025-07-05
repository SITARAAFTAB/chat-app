// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9FD_5_MIYaOleLi9-dPotHLhOgug65TA",
  authDomain: "corvit-morning.firebaseapp.com",
  databaseURL: "https://corvit-morning-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "corvit-morning",
  storageBucket: "corvit-morning.firebasestorage.app",
  messagingSenderId: "40183563829",
  appId: "1:40183563829:web:4d1dd709f72775aeaa137c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase();