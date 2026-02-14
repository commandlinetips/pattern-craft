"use client";

import { Palette, Star } from "lucide-react";
import { useFavorites } from "@/context/favourites-context";
import { useLanguage } from "@/context/language-context";

interface PatternEmptyStateProps {
  activeTab: string;
  theme: "light" | "dark";
}

export default function PatternEmptyState({
  activeTab,
  theme,
}: PatternEmptyStateProps) {
  const { favourites } = useFavorites();
  const { t } = useLanguage();
  const isPatternDark = theme === "dark";

  if (activeTab === "favourites" && favourites.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4 text-yellow-400 flex justify-center">
          <Star className="h-12 w-12" />
        </div>
        <h3
          className={`text-lg font-semibold mb-2 ${
            isPatternDark ? "text-gray-200" : "text-black dark:text-gray-200"
          }`}
        >
          {t.empty.noFavoritesTitle}
        </h3>
        <p
          className={`${
            isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
          }`}
        >
          {t.empty.noFavoritesDesc}
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-4 text-purple-400 flex justify-center">
        <Palette className="h-12 w-12" />
      </div>
      <h3
        className={`text-lg font-semibold mb-2 ${
          isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
        }`}
      >
        {t.empty.noPatternsTitle}
      </h3>
      <p
        className={`${
          isPatternDark ? "text-gray-200" : "text-gray-600 dark:text-gray-200"
        }`}
      >
        {t.empty.noPatternsDesc}
      </p>
    </div>
  );
}
