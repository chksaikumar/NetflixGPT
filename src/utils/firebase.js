// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi286S8nisnj0T4YON-BVgXEpGqVxuRyg",
  authDomain: "netflixgpt-17256.firebaseapp.com",
  projectId: "netflixgpt-17256",
  storageBucket: "netflixgpt-17256.firebasestorage.app",
  messagingSenderId: "88749713222",
  appId: "1:88749713222:web:54ceceb1cf310cd7152747",
  measurementId: "G-4GK3SWNYWC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
