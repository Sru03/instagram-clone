// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4N0qN7WrY3yts9ZbGiPCVq8tZx4tkNxk",
  authDomain: "instagram-clone-react-93b38.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-93b38-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-93b38",
  storageBucket: "instagram-clone-react-93b38.appspot.com",
  messagingSenderId: "443635656412",
  appId: "1:443635656412:web:7f30b0d887bdef58ef3619",
  measurementId: "G-NY2NL3F6FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firestore = getFirestore(app);