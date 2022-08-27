// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrvU8K0u1-vlEjwjf6Jb11zhoOU0rNihk",
  authDomain: "angular-f19f3.firebaseapp.com",
  projectId: "angular-f19f3",
  storageBucket: "angular-f19f3.appspot.com",
  messagingSenderId: "255530654110",
  appId: "1:255530654110:web:d19ed68970ece5075ade8f",
  measurementId: "G-X802PR5998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebase = initializeApp(firebase);
