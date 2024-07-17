import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXC3jOF5X9v2TpwZWyJlqS8FusAtmVf08",
  authDomain: "skinhero-1bd91.firebaseapp.com",
  projectId: "skinhero-1bd91",
  storageBucket: "skinhero-1bd91.appspot.com",
  messagingSenderId: "1066540474385",
  appId: "1:1066540474385:web:7ebaa1d0b215e6b9d9d1b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };