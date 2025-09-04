import { renderInflationChart } from './charts/inflationChart.js';
import { validateAddress, maskAddress } from './modules/walletUtils.js';
import { splitAndSend } from './modules/bankTransfer.js';
import { distributePostPilot } from './modules/postPilotDistribution.js';

document.addEventListener("DOMContentLoaded", () => {
  renderInflationChart("chartContainer");

  const wallet = "0x833EF537868AC2b2f3C068f8a6Fcb7e0B466f148";
  if (validateAddress(wallet)) {
    document.getElementById("walletDisplay").innerText = maskAddress(wallet);
  }

  // Beispiel: Kapitalbindung
  const amount = 1000;
  splitAndSend(amount); // Pilotphase
  distributePostPilot(amount); // Nach Pilotphase
});
