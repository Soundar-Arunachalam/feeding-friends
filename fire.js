// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYGI9P0aarUe0Nmua3RB8FPmwfubB1IMo",
  authDomain: "feeding-friends-b21fc.firebaseapp.com",
  projectId: "feeding-friends-b21fc",
  storageBucket: "feeding-friends-b21fc.firebasestorage.app",
  messagingSenderId: "855470093646",
  appId: "1:855470093646:web:43bed37cccaea526335a1f",
  measurementId: "G-T7934CSZ9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);