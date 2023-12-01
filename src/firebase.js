// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG_kHxZz-wLzbxcsUC95DVNs2wP_oCRP4",
  authDomain: "web-kelas-967d3.firebaseapp.com",
  projectId: "web-kelas-967d3",
  storageBucket: "web-kelas-967d3.appspot.com",
  messagingSenderId: "472733026905",
  appId: "1:472733026905:web:2981031f57004fc424ff48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
