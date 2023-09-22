
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCOOZ8B3w712OjCGkpShlWoW1BiL4AUr4Q",
  authDomain: "espacio-san-martin-8b73f.firebaseapp.com",
  projectId: "espacio-san-martin-8b73f",
  storageBucket: "espacio-san-martin-8b73f.appspot.com",
  messagingSenderId: "822838822043",
  appId: "1:822838822043:web:99647b8c4a5af42dc4f23e",
  measurementId: "G-6WHDZYSV8E"
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)
const functions = getFunctions(app);
export { app, firestore, auth, storage, functions };

