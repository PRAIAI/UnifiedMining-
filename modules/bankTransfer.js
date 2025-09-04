export function splitAndSend(amount) {
  const fiftyPercent = amount * 0.5;
  sendToIBAN(fiftyPercent, "DE12345678901234567890"); // dein Konto
  sendToWallet(fiftyPercent, "0xPionexWalletAdresse"); // Pionex Wallet
}

function sendToIBAN(amount, iban) {
  console.log(`Sende ${amount} EUR an IBAN ${iban}`);
}

function sendToWallet(amount, wallet) {
  console.log(`Sende ${amount} EUR an Wallet ${wallet}`);
}
