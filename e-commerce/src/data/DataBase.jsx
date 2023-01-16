import { initializeApp } from "firebase/app";
import {
    getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuTL5ZJJf4PaJIkmCaT3Mwrr4UENsIl3k",
  authDomain: "e-commerce-website-01-90c84.firebaseapp.com",
  projectId: "e-commerce-website-01-90c84",
  storageBucket: "e-commerce-website-01-90c84.appspot.com",
  messagingSenderId: "330475348270",
  appId: "1:330475348270:web:38ceb8403fcbf26a305abf"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}

// api.ts:146 Uncaught FirebaseError: Firebase: Need to provide options, when not being deployed to hosting via source. (app/no-options).
//     at initializeApp (api.ts:146:25)
//     at getApp (api.ts:206:12)
//     at getAuth (index.ts:73:44)
//     at DataBase.jsx:17:14