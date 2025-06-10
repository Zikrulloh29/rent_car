// Funktion zur Nachricht-Verarbeitung
function sendeNachricht() {
  const name = document.getElementById("kontaktName").value.trim();
  const email = document.getElementById("kontaktEmail").value.trim();
  const nachricht = document.getElementById("nachricht").value.trim();

  if (!name || !email || !nachricht) {
    alert("Bitte alle Felder ausfüllen!");
    return;
  }

  // Simulierter "Backend"-Speicher mit localStorage
  const kontaktDaten = {
    name: name,
    email: email,
    nachricht: nachricht,
    datum: new Date().toLocaleString(),
  };

  // Lade vorhandene Nachrichten
  let gespeicherteNachrichten =
    JSON.parse(localStorage.getItem("nachrichten")) || [];
  gespeicherteNachrichten.push(kontaktDaten);

  // Speichere wieder im localStorage
  localStorage.setItem("nachrichten", JSON.stringify(gespeicherteNachrichten));

  // Formular zurücksetzen
  document.getElementById("kontaktFormular").reset();

  // Bestätigung anzeigen
  alert("Vielen Dank für deine Nachricht! Wir melden uns bald.");
}

// Optional: Debug-Funktion zum Anzeigen der gespeicherten Nachrichten in der Konsole
function zeigeAlleNachrichten() {
  const alleNachrichten = JSON.parse(localStorage.getItem("nachrichten")) || [];
  console.log("Alle gespeicherten Nachrichten:", alleNachrichten);
}
