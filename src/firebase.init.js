// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1NvSFdK90jBul08AKofeQQoF_5vwgDMI",
  authDomain: "car-doctor-5ee10.firebaseapp.com",
  projectId: "car-doctor-5ee10",
  storageBucket: "car-doctor-5ee10.appspot.com",
  messagingSenderId: "462258066481",
  appId: "1:462258066481:web:2c8c7a1a94079286523110"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
