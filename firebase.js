// firebase.js — CizaHealth+ (lecture seule)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 Configuration Firebase (OBLIGATOIRE)
const firebaseConfig = {
  apiKey: "AIzaSyBR7qDT3a56XqCBu-XeZB6IDR9po9CQX-w",
  authDomain: "cizahealth.firebaseapp.com",
  projectId: "cizahealth",
  storageBucket: "cizahealth.firebasestorage.app",
};

// 🔥 Initialisation
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📦 Export
export { db };
