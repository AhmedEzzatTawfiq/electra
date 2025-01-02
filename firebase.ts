// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRz7W_PDvnDjINbU0VNTLtArSOzYhWaLM",
  authDomain: "shopper-4d22b.firebaseapp.com",
  projectId: "shopper-4d22b",
  storageBucket: "shopper-4d22b.firebasestorage.app",
  messagingSenderId: "139079315353",
  appId: "1:139079315353:web:b56c10bf04d47fe74c6d08"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };