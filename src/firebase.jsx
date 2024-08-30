import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore  

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
const db = getFirestore(app); // Initialize Firestore  

// Export the Firestore and Auth instances  
export { app, auth, db }; // Include db in the export