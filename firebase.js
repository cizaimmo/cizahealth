<script type="module">
  // Firebase SDK (CDN officiel)
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  // Configuration Firebase — CizaHealth
  const firebaseConfig = {

    authDomain: "cizahealth.firebaseapp.com",
    projectId: "cizahealth",
    storageBucket: "cizahealth.firebasestorage.app",
    messagingSenderId: "86541899778",
    appId: "1:86541899778:web:35f7cb537c378a68698afb"
  };

  // Initialisation
  const app = initializeApp(firebaseConfig);

  // Services globaux
  window.auth = getAuth(app);
  window.db = getFirestore(app);

  console.log("🔥 Firebase CizaHealth connecté avec succès");
</script>
