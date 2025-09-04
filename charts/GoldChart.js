export function renderGoldChart(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "<div style='color:gold;'>Goldchart 2025–2040 wird geladen...</div>";

  export async function renderGoldChart(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "⏳ Lade Goldpreis...";

  try {
    const config = await fetch('./data/config.json').then(res => res.json());
    const apiKey = config.goldApiKey;

    const response = await fetch("https://www.goldapi.io/api/XAU/USD", {
      headers: {
        "x-access-token": apiKey,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    if (!data || !data.price) {
      container.innerHTML = "⚠️ Keine Preisdaten verfügbar.";
      return;
    }

    container.innerHTML = `
      🪙 <strong>Goldpreis:</strong> ${data.price} USD / Unze<br>
      📅 <em>Letzte Aktualisierung:</em> ${data.timestamp}
    `;
  } catch (error) {
    container.innerHTML = "❌ Fehler beim Laden des Goldcharts.";
    console.error("GoldAPI Fehler:", error);
  }
}
  
  // Hier kann TradingView oder Chart.js eingebunden werden

