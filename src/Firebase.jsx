// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLzwwu-Ag4jcnkxWNl_kQ41kziCCFRFVs",
  authDomain: "keep-curious.firebaseapp.com",
  projectId: "keep-curious",
  storageBucket: "keep-curious.appspot.com",
  messagingSenderId: "968580312590",
  appId: "1:968580312590:web:fe3c84dec567e7649ed65f",
  measurementId: "G-5F1H5DRK6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);