import { initializeApp } from "firebase/app";
import {
    getAuth,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuTL5ZJJf4PaJIkmCaT3Mwrr4UENsIl3k",
  authDomain: "e-commerce-website-01-90c84.firebaseapp.com",
  projectId: "e-commerce-website-01-90c84",
  storageBucket: "e-commerce-website-01-90c84.appspot.com",
  messagingSenderId: "330475348270",
  appId: "1:330475348270:web:38ceb8403fcbf26a305abf"
};

const provider = new GoogleAuthProvider();
const auth = getAuth();
const app = initializeApp(firebaseConfig);

export {auth, provider}