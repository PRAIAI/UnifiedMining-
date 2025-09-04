export function distributePostPilot(amount) {
  const fiftyPercent = amount * 0.5;
  const toGmbH = fiftyPercent * 0.1;
  const toRFOF = fiftyPercent * 0.4;

  sendToIBAN(toGmbH, "DE98765432109876543210"); // GmbH Konto
  sendToWallet(toRFOF, "0xRFOFBlockchainAdresse"); // InterBOxSpider Wallet
}
