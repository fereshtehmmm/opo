// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDhBP0MXg327DXCeUcDve7J9ZY9mTHM8eE",
  authDomain: "rasmly-orders.firebaseapp.com",
  projectId: "rasmly-orders",
  storageBucket: "rasmly-orders.appspot.com",
  messagingSenderId: "441103148101",
  appId: "1:441103148101:web:732a35317de00682596f2c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
