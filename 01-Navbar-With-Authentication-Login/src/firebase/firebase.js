// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFVUJTJXBfox8N88-CXPh4iK2nK5AhnQo",
  authDomain: "login-32ed1.firebaseapp.com",
  projectId: "login-32ed1",
  storageBucket: "login-32ed1.appspot.com",
  messagingSenderId: "2919127220",
  appId: "1:2919127220:web:a9b3cf4f6044d337841fe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;