export type Language = "en" | "ar";

export interface Translations {
  // Navigation
  nav: {
    patterns: string;
    gradients: string;
    geometric: string;
    decorative: string;
    effects: string;
    favourites: string;
    allPatterns: string;
  };
  // Hero
  hero: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
  // Pattern Card
  card: {
    preview: string;
    hide: string;
    copy: string;
    copied: string;
    addToFavorites: string;
    removeFromFavorites: string;
  };
  // Footer
  footer: {
    copyright: string;
    craftedBy: string;
    forkedFrom: string;
    mitLicense: string;
  };
  // Empty State
  empty: {
    noFavorites: string;
    allPatterns: string;
  };
  // Language
  language: {
    en: string;
    ar: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      patterns: "Patterns",
      gradients: "Gradients",
      geometric: "Geometric",
      decorative: "Decorative",
      effects: "Effects",
      favourites: "Favourites",
      allPatterns: "All Patterns",
    },
    hero: {
      title: "Beautiful Background Patterns for Your Website",
      subtitle: "100+ modern CSS patterns and gradients. Copy and paste into your project.",
      primaryButton: "Browse Patterns",
      secondaryButton: "View on GitHub",
    },
    card: {
      preview: "Preview",
      hide: "Hide",
      copy: "Copy",
      copied: "Copied",
      addToFavorites: "Add to favorites",
      removeFromFavorites: "Remove from favorites",
    },
    footer: {
      copyright: "© {year} Khaled. Forked from Pattern Craft by Megh Bari. MIT License.",
      craftedBy: "Crafted with",
      forkedFrom: "Forked from",
      mitLicense: "MIT License",
    },
    empty: {
      noFavorites: "No favorites yet",
      allPatterns: "Browse all patterns",
    },
    language: {
      en: "English",
      ar: "العربية",
    },
  },
  ar: {
    nav: {
      patterns: "الأنماط",
      gradients: "تدرجات",
      geometric: "هندسي",
      decorative: "زخرفي",
      effects: "تأثيرات",
      favourites: "المفضلة",
      allPatterns: "جميع الأنماط",
    },
    hero: {
      title: "أنماط خلفية جميلة لموقعك",
      subtitle: "أكثر من 100 نمط وتدرج CSS حديث. انسخ والصق في مشروعك.",
      primaryButton: "تصفح الأنماط",
      secondaryButton: "عرض على GitHub",
    },
    card: {
      preview: "معاينة",
      hide: "إخفاء",
      copy: "نسخ",
      copied: "تم النسخ",
      addToFavorites: "إضافة للمفضلة",
      removeFromFavorites: "إزالة من المفضلة",
    },
    footer: {
      copyright: "© {year} خالد. مفرع من Pattern Craft بواسطة Megh Bari. ترخيص MIT.",
      craftedBy: "صُنع بواسطة",
      forkedFrom: "مفرع من",
      mitLicense: "ترخيص MIT",
    },
    empty: {
      noFavorites: "لا توجد مفضلات بعد",
      allPatterns: "تصفح جميع الأنماط",
    },
    language: {
      en: "English",
      ar: "العربية",
    },
  },
};
