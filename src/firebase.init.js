// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbF2caKVS1KUqKylWQDxDg1szM0bwtjCs",
  authDomain: "pc-techs-eae9c.firebaseapp.com",
  projectId: "pc-techs-eae9c",
  storageBucket: "pc-techs-eae9c.appspot.com",
  messagingSenderId: "547653305759",
  appId: "1:547653305759:web:c818d5e2db96ca7e1369aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;