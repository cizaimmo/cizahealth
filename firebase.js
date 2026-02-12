// firebase.js
import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { getStorage } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBR7qDT3a56XqCBu-XeZB6IDR9po9CQX-w",
  authDomain: "cizahealth.firebaseapp.com",
  projectId: "cizahealth",
  storageBucket: "cizahealth.firebasestorage.app",
  messagingSenderId: "86541899778",
  appId: "1:86541899778:web:35f7c537c378a68698af1b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
