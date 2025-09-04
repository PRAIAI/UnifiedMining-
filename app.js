// app.js

document.addEventListener("DOMContentLoaded", () => {
  const amountInput = document.getElementById("amount");
  const currencySelect = document.getElementById("currency");
  const resultDiv = document.getElementById("result");
  const startMiningBtn = document.getElementById("startMining");

  const connectWalletBtn = document.getElementById("connectWallet");
  const walletStatusDiv = document.getElementById("walletStatus");

  const inflationChartDiv = document.getElementById("inflationChart");

  // 💰 Mining-Ertrag berechnen
  startMiningBtn.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;

    if (isNaN(amount) || amount < 100) {
      resultDiv.innerText = "❗ Bitte mindestens 100 investieren.";
      return;
    }

    const monthlyYield = amount * 0.05 * 0.5;
    resultDiv.innerHTML = `
      ✅ Du erhältst monatlich ca. <strong>${monthlyYield.toFixed(2)} ${currency}</strong> in BTC auf deine Wallet.
    `;
  });

  // 🔐 Wallet verbinden
  connectWalletBtn.addEventListener("click", () => {
    walletStatusDiv.innerHTML = `
      🔄 Wallet-Verbindung wird vorbereitet...<br />
      ✅ BTC-kompatible Wallets folgen bald.
    `;
  });

  // 📊 Chart-Placeholder initialisieren
  if (inflationChartDiv) {
  inflationChartDiv.innerHTML = "⏳ Lade Goldpreis...";

  fetch("https://www.goldapi.io/api/XAU/USD", {
    headers: {
      "x-access-token": "goldapi-5qxnj19mf5oqybo-io",
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      if (!data || !data.price) {
        inflationChartDiv.innerHTML = "⚠️ Keine Preisdaten verfügbar.";
        return;
      }

      inflationChartDiv.innerHTML = `
        🪙 <strong>Goldpreis:</strong> ${data.price} USD / Unze<br>
        📅 <em>Letzte Aktualisierung:</em> ${data.timestamp}
      `;
    })
    .catch(error => {
      inflationChartDiv.innerHTML = "❌ Fehler beim Laden des Goldcharts.";
      console.error("GoldAPI Fehler:", error);
    });
}
