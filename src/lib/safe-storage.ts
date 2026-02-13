// Safe localStorage wrapper that works even with broken Node.js v25 localStorage
// This module must be imported before any other code that accesses localStorage

const safeLocalStorage = {
  getItem: (key: string): string | null => {
    if (typeof window === "undefined") return null;
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // Ignore errors
    }
  },
  removeItem: (key: string): void => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.removeItem(key);
    } catch {
      // Ignore errors
    }
  },
  clear: (): void => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.clear();
    } catch {
      // Ignore errors
    }
  },
};

// Fix broken global localStorage on Node.js v25
if (typeof localStorage !== "undefined" && typeof localStorage.getItem !== "function") {
  // Override broken localStorage with our safe version
  const brokenLocalStorage = localStorage;
  Object.defineProperty(global, "localStorage", {
    value: safeLocalStorage as any,
    writable: true,
    configurable: true,
  });
}

export default safeLocalStorage;
