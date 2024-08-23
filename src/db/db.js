import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCO2EExbgcZ1oHA3JOtqxdkB06zEuDHK-A",
  authDomain: "proyectofinal-reactjs-ch.firebaseapp.com",
  projectId: "proyectofinal-reactjs-ch",
  storageBucket: "proyectofinal-reactjs-ch.appspot.com",
  messagingSenderId: "692048531770",
  appId: "1:692048531770:web:32a0efae8425d162818003"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db