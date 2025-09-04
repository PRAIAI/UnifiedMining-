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
    inflationChartDiv.innerHTML = `
      📈 <em>import { renderGoldChart } from './charts/goldChart.js';

document.addEventListener("DOMContentLoaded", () => {
  renderGoldChart("inflationChart"); // Container aus index.html
});</em>
    `;
  }
});
