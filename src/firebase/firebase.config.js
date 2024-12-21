// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgbA3O2Y5QyLqvXl4Es-0o_v5mqkEwnls",
  authDomain: "mordern-hotel-projects-a11.firebaseapp.com",
  projectId: "mordern-hotel-projects-a11",
  storageBucket: "mordern-hotel-projects-a11.firebasestorage.app",
  messagingSenderId: "654676358051",
  appId: "1:654676358051:web:418856ccd296a6cf72e016",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
