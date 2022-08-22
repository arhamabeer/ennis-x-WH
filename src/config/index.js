// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfpxXgjZmmOGV7wYKEeNJPlh7c6HqXZko",
  authDomain: "wh-test123.firebaseapp.com",
  projectId: "wh-test123",
  storageBucket: "wh-test123.appspot.com",
  messagingSenderId: "94173645973",
  appId: "1:94173645973:web:51c86970fd80751faf1f9c",
  measurementId: "G-R1MG81J27L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);