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
  var myHeaders = new Headers();
myHeaders.append("x-access-token", "goldapi-5qxnj19mf5oqybo-io");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.goldapi.io/api/status", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
{
  "result": true
}
