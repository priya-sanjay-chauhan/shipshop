// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByZdChamTfzSKR1LvDAB2y3qCpvvF9C20",
  authDomain: "ecomm-4109e.firebaseapp.com",
  projectId: "ecomm-4109e",
  storageBucket: "ecomm-4109e.appspot.com",
  messagingSenderId: "897825990891",
  appId: "1:897825990891:web:f4d16133c877458636b6ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app)
const auth=getAuth(app)

export {fireDB,auth}