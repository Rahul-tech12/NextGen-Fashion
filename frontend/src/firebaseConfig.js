import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnnJgiLfi6fdMFsmQwqLBbK78l2kRyvrc",
  authDomain: "college-project-35c0e.firebaseapp.com",
  projectId: "college-project-35c0e",
  storageBucket: "college-project-35c0e.firebasestorage.app",
  messagingSenderId: "303187872136",
  appId: "1:303187872136:web:a310b2d46e9a23fded523d",
  measurementId: "G-ELQ518S657"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
