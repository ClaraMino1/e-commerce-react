import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "thelirium-b2010.firebaseapp.com",
  projectId: "thelirium-b2010",
  storageBucket: "thelirium-b2010.firebasestorage.app",
  messagingSenderId: "805221309383",
  appId: "1:805221309383:web:86e27e32e58e5a38e317e2"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)

