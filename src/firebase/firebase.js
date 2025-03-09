// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvJPQm1fNKwTv1en01qr1OMmAPLkALK4Y",
  authDomain: "art-gallery-202ee.firebaseapp.com",
  projectId: "art-gallery-202ee",
  storageBucket: "art-gallery-202ee.firebasestorage.app",
  messagingSenderId: "938942617518",
  appId: "1:938942617518:web:411125063e58a927941a3f",
  measurementId: "G-80C63Q8G6W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
