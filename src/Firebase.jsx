// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC68cVgKMD-IhDyf64WtM_WVk5fKcXCfZQ",
  authDomain: "keep-curious-v2.firebaseapp.com",
  projectId: "keep-curious-v2",
  storageBucket: "keep-curious-v2.appspot.com",
  messagingSenderId: "385439044097",
  appId: "1:385439044097:web:45e2e41d0a0eb50016e600",
  measurementId: "G-0Y18B8SECD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);