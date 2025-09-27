// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDImwagiJFULKQvg909gSoDat7hbf9caFw",
  authDomain: "netflixgpt-1fb47.firebaseapp.com",
  projectId: "netflixgpt-1fb47",
  storageBucket: "netflixgpt-1fb47.appspot.com",
  messagingSenderId: "375261769284",
  appId: "1:375261769284:web:25aae0eda08f10978e9611",
  measurementId: "G-7EYWGEZ4WJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
