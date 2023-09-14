// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADjCeelztXeIzWLq_IC-RHN8AqenXHwvo",
  authDomain: "ema-john-simple-6b891.firebaseapp.com",
  projectId: "ema-john-simple-6b891",
  storageBucket: "ema-john-simple-6b891.appspot.com",
  messagingSenderId: "1046323576669",
  appId: "1:1046323576669:web:e38ae6718d926be48332b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);

export default auth;