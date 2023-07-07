// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnLwxqEHK3hH628JckpXzyyMNLmB6d-wc",
  authDomain: "assignment-56702.firebaseapp.com",
  databaseURL: "https://assignment-56702-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "assignment-56702",
  storageBucket: "assignment-56702.appspot.com",
  messagingSenderId: "993222273694",
  appId: "1:993222273694:web:8bce4fe4eefc407c8fe98f",
  measurementId: "G-RDNJD717F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;