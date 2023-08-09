// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzUTX2IMsauRIkO--Yi0XQz-YRzimRP1E",
    authDomain: "nepflex-1598c.firebaseapp.com",
    projectId: "nepflex-1598c",
    storageBucket: "nepflex-1598c.appspot.com",
    messagingSenderId: "1029045911805",
    appId: "1:1029045911805:web:f8f11a88c21b5f7eeffe94",
    measurementId: "G-6ZEPFWJZ7X"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
const analytics = getAnalytics(app);