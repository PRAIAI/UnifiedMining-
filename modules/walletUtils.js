export function validateAddress(address) {
  const allowed = "0x833EF537868AC2b2f3C068f8a6Fcb7e0B466f148";
  return address.toLowerCase() === allowed.toLowerCase();
}

export function maskAddress(address) {
  return `${address.slice(0, 8)}...${address.slice(-8)}`;
}
