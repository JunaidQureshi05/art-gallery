// src/firebaseAuth.js

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign In
export const signInWithGoogle = async () => {
  try {
    debugger;
    const result = await signInWithPopup(auth, provider);
    debugger;
    return result.user;
  } catch (error) {
    console.error("Error signing in", error);
  }
};

// Sign Out
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};
