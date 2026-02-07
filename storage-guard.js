/* =========================================================
   CIZA GROUP — STORAGE GUARD (PRODUCTION)
   Rôle :
   - Vérifie que le navigateur supporte localStorage
   - Nettoie les états corrompus
   - Évite les pages figées / boutons bloqués
   - Sécurise les flows admin / pro / client
   ========================================================= */

(function () {
  try {
    // 1️⃣ Vérification support localStorage
    if (typeof window.localStorage === "undefined") {
      alert(
        "Votre navigateur n’est pas compatible.\n" +
        "Veuillez utiliser Chrome, Safari ou Firefox à jour."
      );
      return;
    }

    // 2️⃣ Test écriture / lecture
    const TEST_KEY = "__ciza_storage_test__";
    localStorage.setItem(TEST_KEY, "ok");
    localStorage.removeItem(TEST_KEY);

    // 3️⃣ Nettoyage des états cassés connus
    const keysToCheck = [
      "ciza_loading",
      "ciza_submitting",
      "ciza_lock",
      "ciza_temp_user",
      "ciza_pending_action"
    ];

    keysToCheck.forEach((key) => {
      const v = localStorage.getItem(key);
      if (v === "true" || v === "locked") {
        localStorage.removeItem(key);
      }
    });

    // 4️⃣ Marqueur environnement OK
    localStorage.setItem("ciza_env_ready", "1");

    // 5️⃣ Sécurité : timeout anti-freeze (cas bouton figé)
    window.addEventListener("load", () => {
      setTimeout(() => {
        localStorage.removeItem("ciza_loading");
        localStorage.removeItem("ciza_submitting");
      }, 3000);
    });

    // 6️⃣ Debug discret (désactivable plus tard)
    console.log("✅ Ciza Storage Guard actif");

  } catch (e) {
    console.error("❌ Storage Guard Error", e);
    alert(
      "Une erreur technique est survenue.\n" +
      "Veuillez recharger la page ou contacter CizaHealth+."
    );
  }
})();
