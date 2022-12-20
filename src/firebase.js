// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCduVBK0y47ytCOqg3I29KlS9z_NOK7Kas",
    authDomain: "let-schat-cde0c.firebaseapp.com",
    projectId: "let-schat-cde0c",
    storageBucket: "let-schat-cde0c.appspot.com",
    messagingSenderId: "1078027103394",
    appId: "1:1078027103394:web:03710d796e20859561bbfb",
    measurementId: "G-FVHDLP4DDL"
};
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const storage = getStorage(); 
export const db=getFirestore();