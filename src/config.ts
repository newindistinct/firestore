
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBE8hlH15xV2ucuSXEvJI8PwrMhTDI9RjA",
    authDomain: "testdb-36ded.firebaseapp.com",
    projectId: "testdb-36ded",
    storageBucket: "testdb-36ded.appspot.com",
    messagingSenderId: "179902468843",
    appId: "1:179902468843:web:799972983b88bee04be4ae",
    measurementId: "G-GTCWJ8YKTE"
  };
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);