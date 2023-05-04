// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyComEJ_UBPQ_hJsYNGacTdgWNGeZH0xMwo",
    authDomain: "rncrud-2fe7f.firebaseapp.com",
    projectId: "rncrud-2fe7f",
    storageBucket: "rncrud-2fe7f.appspot.com",
    messagingSenderId: "393248640534",
    appId: "1:393248640534:web:937ac137f11da5aec32f37"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = firebase.firestore();



