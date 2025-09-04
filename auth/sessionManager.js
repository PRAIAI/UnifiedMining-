export function createSession(userId) {
  sessionStorage.setItem("activeUser", userId);
}

export function getSession() {
  return sessionStorage.getItem("activeUser");
}

export function clearSession() {
  sessionStorage.removeItem("activeUser");
}
