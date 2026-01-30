<script type="module">
  import { auth, db } from "./firebase.js";
  import {
    collection,
    query,
    where,
    getDocs
  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

  /**
   * 🔍 Resolve Patient
   * - Lie l'utilisateur connecté à son dossier patient
   * - Stocke patientDocId + patientId dans localStorage
   * - À appeler AVANT d'accéder au dossier médical
   */

  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      window.location.href = "login.html";
      return;
    }

    try {
      const q = query(
        collection(db, "patients"),
        where("userId", "==", user.uid)
      );

      const snap = await getDocs(q);

      if (snap.empty) {
        console.error("❌ Aucun dossier patient trouvé pour cet utilisateur");
        localStorage.removeItem("patientDocId");
        localStorage.removeItem("patientId");
        return;
      }

      // ✅ On prend le premier (1 patient = 1 user)
      const docSnap = snap.docs[0];
      const data = docSnap.data();

      // 🔐 Stockage officiel
      localStorage.setItem("patientDocId", docSnap.id);
      localStorage.setItem("patientId", data.patientId);
      localStorage.setItem("sessionActive", "true");

      console.log("✅ Patient résolu :", {
        patientDocId: docSnap.id,
        patientId: data.patientId
      });

    } catch (e) {
      console.error("🔥 Erreur resolve-patient :", e);
    }
  });
</script>
