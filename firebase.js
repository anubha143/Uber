import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCkZphlQG8zNxjKMqCefi5t5Oyj2mP0Ke0",
  authDomain: "uberclone-live.firebaseapp.com",
  projectId: "uberclone-live",
  storageBucket: "uberclone-live.appspot.com",
  messagingSenderId: "384072052027",
  appId: "1:384072052027:web:a8b5a8d6557e4e07025b1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { app, provider, auth };
