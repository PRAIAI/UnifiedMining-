const password = prompt("Passwort eingeben:");
if (password !== "DeinGeheimesPasswort") {
  document.body.innerHTML = "<h1 style='color:red;text-align:center;'>Zugriff verweigert.</h1>";
  throw new Error("Unauthorized access");
}
