// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVdUZFGleGOAgORg1DP5DFNv1PsW1X7yc",
  authDomain: "tour-to-tuscany.firebaseapp.com",
  projectId: "tour-to-tuscany",
  storageBucket: "tour-to-tuscany.firebasestorage.app",
  messagingSenderId: "155109114006",
  appId: "1:155109114006:web:b46d408511e2a3afb702b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app)
export default auth;