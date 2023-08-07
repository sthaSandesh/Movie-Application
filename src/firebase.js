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
    apiKey: "AIzaSyCOueOgSGUeXATvldbVRH0fR7nroxNepno",
    authDomain: "nepflex-3c4e2.firebaseapp.com",
    projectId: "nepflex-3c4e2",
    storageBucket: "nepflex-3c4e2.appspot.com",
    messagingSenderId: "1062937022714",
    appId: "1:1062937022714:web:fe391bc0b18c6f26dd7943",
    measurementId: "G-BVD93XY9NJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
const analytics = getAnalytics(app);