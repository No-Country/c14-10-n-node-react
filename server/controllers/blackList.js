// Este módulo almacena tokens JWT que deben ser invalidados

const tokenBlacklist = new Set();

export function addToBlacklist(token) {
  tokenBlacklist.add(token);
}

export function removeFromBlacklist(token) {
  tokenBlacklist.delete(token);
}

export function isTokenBlacklisted(token) {
  return tokenBlacklist.has(token);
}

