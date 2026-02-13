"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import safeLocalStorage from "@/lib/safe-storage";

// Safe localStorage wrapper for next-themes
const safeStorage: Storage = {
  getItem: safeLocalStorage.getItem,
  setItem: safeLocalStorage.setItem,
  removeItem: safeLocalStorage.removeItem,
  clear: safeLocalStorage.clear,
  get length() {
    return 0;
  },
  key(index: number): string | null {
    return null;
  },
};

export function ThemeProvider({ children, ...props }: Omit<ThemeProviderProps, "storage">) {
  return (
    <NextThemesProvider {...props} storage={safeStorage}>
      {children}
    </NextThemesProvider>
  );
}
