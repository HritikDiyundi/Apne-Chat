import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3BS95PdmwhRwu-KwwG6FMGTIUBL40DLw",
  authDomain: "ytchatt-92e10.firebaseapp.com",
  projectId: "ytchatt-92e10",
  storageBucket: "ytchatt-92e10.appspot.com",
  messagingSenderId: "417854468069",
  appId: "1:417854468069:web:15ac9219626a98b1fdc90c",
  measurementId: "G-B319V8PFZB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();



