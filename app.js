// Chart.js Initialisierung
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// BTC Verteilung
function calculateBTC() {
  const kunden = parseInt(document.getElementById("kunden").value);
  const betrag = parseFloat(document.getElementById("betrag").value);
  const result = document.getElementById("btcResult");

  if (isNaN(kunden) || isNaN(betrag) || kunden <= 0) {
    result.textContent = "Bitte gültige Werte eingeben.";
    return;
  }

  const btcProKunde = (betrag / kunden).toFixed(8);
  result.textContent = `Jeder Kunde erhält: ${btcProKunde} BTC`;
}

// Wallet Verbindung (Mock)
function connectWallet() {
  const status = document.getElementById("walletStatus");
  status.textContent = "Wallet-Verbindung wird vorbereitet...";
}
