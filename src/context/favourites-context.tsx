"use client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import safeLocalStorage from "@/lib/safe-storage";

interface FavoritesContextType {
  favourites: string[];
  toggleFavourite: (id: string) => void;
  isFavourite: (id: string) => boolean;
  clearFavourites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favourites: [],
  toggleFavourite: () => {},
  isFavourite: () => false,
  clearFavourites: () => {},
});

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Set client-side mount state
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load favourites on mount (only on client with working localStorage)
  useEffect(() => {
    if (!isClient) return;
    const stored = safeLocalStorage.getItem("favourite");
    if (stored) {
      try {
        setFavourites(JSON.parse(stored));
      } catch (error) {
        console.error("Error parsing favourites from localStorage:", error);
      }
    }
  }, [isClient]);

  // Save favourites to localStorage
  useEffect(() => {
    if (!isClient) return;
    safeLocalStorage.setItem("favourite", JSON.stringify(favourites));
  }, [isClient, favourites]);

  const toggleFavourite = (id: string) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const isFavourite = (id: string) => favourites.includes(id);

  const clearFavourites = () => {
    setFavourites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favourites, toggleFavourite, isFavourite, clearFavourites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
