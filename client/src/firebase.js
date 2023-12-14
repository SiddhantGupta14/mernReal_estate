// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-29e50.firebaseapp.com",
  projectId: "mern-estate-29e50",
  storageBucket: "mern-estate-29e50.appspot.com",
  messagingSenderId: "703421555395",
  appId: "1:703421555395:web:da81161e804a1dbe933876",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
