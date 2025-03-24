import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // For auth
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getStorage } from "firebase/storage"; // For Storage

const firebaseConfig = {
  apiKey: "AIzaSyA-YBUT_9GR7-icceLzzjb1Vnj31-UfHS8",
  authDomain: "autofridge-34b55.firebaseapp.com",
  projectId: "autofridge-34b55",
  storageBucket: "autofridge-34b55.firebasestorage.app",
  messagingSenderId: "776798658631",
  appId: "1:776798658631:web:63e5d1d0a5d8f2a9c75162",
};

const firebaseApp = initializeApp(firebaseConfig);

// Export auth, firestore, and storage instances
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export default firebaseApp;



