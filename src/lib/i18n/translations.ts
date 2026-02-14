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
    description: string;
    badge: string;
    badgeReadMore: string;
    primaryButton: string;
    secondaryButton: string;
    featureOneClickTitle: string;
    featureOneClickDesc: string;
    featureLivePreviewTitle: string;
    featureLivePreviewDesc: string;
    statsPatterns: string;
    statsFree: string;
  };
  // Pattern Showcase
  showcase: {
    title: string;
    subtitle: string;
    patternCount: (count: number, category: string) => string;
  };
  // Categories
  category: {
    all: string;
    gradients: string;
    geometric: string;
    decorative: string;
    effects: string;
    favourites: string;
  };
  // Search
  search: {
    placeholder: string;
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
  // Empty State
  empty: {
    noFavoritesTitle: string;
    noFavoritesDesc: string;
    noPatternsTitle: string;
    noPatternsDesc: string;
  };
  // Footer
  footer: {
    copyright: string;
    tagline: string;
  };
  // Support Dropdown
  support: {
    buyMeCoffee: string;
    paypal: string;
    upiPayment: string;
    scanOrCopy: string;
    copyUpiId: string;
    upiIdLabel: string;
    scanToPay: string;
    copiedToClipboard: string;
    ariaLabel: string;
  };
  // Return to Preview
  returnToPreview: {
    label: string;
    ariaLabel: string;
  };
  // Scroll to Top
  scrollToTop: {
    ariaLabel: string;
  };
  // Navbar
  navbar: {
    brand: string;
    twitterAriaLabel: string;
    githubAriaLabel: string;
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
      title: "Craft Beautiful",
      subtitle: "Patterns Backgrounds",
      description: "Professional-grade background patterns and gradients. Easily copy the code and seamlessly integrate it into your projects. Crafted with modern CSS and Tailwind",
      badge: "5+ New Patterns",
      badgeReadMore: "Read More",
      primaryButton: "Browse Patterns",
      secondaryButton: "Contribute Here!",
      featureOneClickTitle: "One-Click Copy",
      featureOneClickDesc: "Ready-to-use CSS code",
      featureLivePreviewTitle: "Live Preview",
      featureLivePreviewDesc: "See patterns in action",
      statsPatterns: "Patterns",
      statsFree: "Free",
    },
    showcase: {
      title: "Pattern Library",
      subtitle: "Tap on mobile or hover on desktop to see options",
      patternCount: (count: number, category: string) => {
        const plural = count === 1 ? "pattern" : "patterns";
        return category === "all" ? `${count} ${plural}` : `${count} ${plural} in ${category}`;
      },
    },
    category: {
      all: "All Patterns",
      gradients: "Gradients",
      geometric: "Geometric",
      decorative: "Decorative",
      effects: "Effects",
      favourites: "Favourites",
    },
    search: {
      placeholder: "Search...",
    },
    card: {
      preview: "Preview",
      hide: "Hide",
      copy: "Copy",
      copied: "Copied",
      addToFavorites: "Add to favorites",
      removeFromFavorites: "Remove from favorites",
    },
    empty: {
      noFavoritesTitle: "No favourites yet",
      noFavoritesDesc: "You haven't saved any favorites yet. Tap the icon on a pattern to add it to your favorites!",
      noPatternsTitle: "No patterns found",
      noPatternsDesc: "No patterns available in this category yet.",
    },
    footer: {
      copyright: "© {year} PatternCraft. All rights reserved.",
      tagline: "Crafting beautiful patterns",
    },
    support: {
      buyMeCoffee: "Buy Me Coffee",
      paypal: "PayPal",
      upiPayment: "UPI Payment",
      scanOrCopy: "Scan QR or copy UPI ID",
      copyUpiId: "Copy UPI ID",
      upiIdLabel: "UPI ID:",
      scanToPay: "Scan to pay with any UPI app",
      copiedToClipboard: "UPI ID copied to clipboard!",
      ariaLabel: "Support options",
    },
    returnToPreview: {
      label: "Return back to preview",
      ariaLabel: "Return back to preview",
    },
    scrollToTop: {
      ariaLabel: "Scroll to top",
    },
    navbar: {
      brand: "PatternCraft",
      twitterAriaLabel: "Twitter",
      githubAriaLabel: "GitHub",
    },
    language: {
      en: "English",
      ar: "العربية",
    },
  },
  ar: {
    nav: {
      patterns: "الأنماط",
      gradients: "تدرجات لونية",
      geometric: "أشكال هندسية",
      decorative: "زخارف فنية",
      effects: "تأثيرات بصرية",
      favourites: "المفضلة",
      allPatterns: "كافة الأنماط",
    },
    hero: {
      title: "ابتكِر خلفيات",
      subtitle: "بأنماط بصرية مذهلة",
      description: "مكتبة احترافية لأنماط الخلفيات والتدرجات اللونية. انسخ الكود بضغطة واحدة وادمجها في مشاريعك بكل سلاسة. مطورة بأحدث تقنيات CSS و Tailwind.",
      badge: "+5 أنماط جديدة مضافة",
      badgeReadMore: "اكتشف المزيد",
      primaryButton: "استكشف الأنماط",
      secondaryButton: "ساهم معنا في المشروع!",
      featureOneClickTitle: "نسخ سريع بضغطة واحدة",
      featureOneClickDesc: "كود CSS جاهز للاستخدام الفوري",
      featureLivePreviewTitle: "معاينة حية ومباشرة",
      featureLivePreviewDesc: "شاهد الأنماط تتفاعل أمامك",
      statsPatterns: "نمط تصميم",
      statsFree: "مجاني تماماً",
    },
    showcase: {
      title: "مكتبة التصاميم",
      subtitle: "اضغط على الجوال أو مرر الماوس على سطح المكتب لاستعراض الخيارات",
      patternCount: (count: number, category: string) => {
        return category === "all" ? `${count} أنماط` : `${count} أنماط في تصنيف ${category}`;
      },
    },
    category: {
      all: "كافة الأنماط",
      gradients: "تدرجات لونية",
      geometric: "أشكال هندسية",
      decorative: "زخارف فنية",
      effects: "تأثيرات بصرية",
      favourites: "المفضلة",
    },
    search: {
      placeholder: "ابحث عن نمط...",
    },
    card: {
      preview: "معاينة",
      hide: "إخفاء",
      copy: "نسخ الكود",
      copied: "تم النسخ!",
      addToFavorites: "إضافة للمفضلة",
      removeFromFavorites: "إزالة من المفضلة",
    },
    empty: {
      noFavoritesTitle: "قائمة المفضلة فارغة",
      noFavoritesDesc: "لم تضف أي أنماط للمفضلة بعد. اضغط على أيقونة القلب على أي نمط ليظهر هنا!",
      noPatternsTitle: "لم نعثر على أي نتائج",
      noPatternsDesc: "لا توجد أنماط متاحة في هذا القسم حالياً.",
    },
    footer: {
      copyright: "© {year} PatternCraft. كافة الحقوق محفوظة.",
      tagline: "نُبدع في تصميم أجمل الأنماط",
    },
    support: {
      buyMeCoffee: "ادعمنا بفنجان قهوة",
      paypal: "PayPal",
      upiPayment: "دفع عبر UPI",
      scanOrCopy: "امسح كود QR أو انسخ معرف UPI",
      copyUpiId: "نسخ معرف UPI",
      upiIdLabel: "معرف UPI:",
      scanToPay: "امسح الرمز للدفع عبر أي تطبيق UPI",
      copiedToClipboard: "تم نسخ المعرف إلى الحافظة!",
      ariaLabel: "خيارات الدعم والمساندة",
    },
    returnToPreview: {
      label: "العودة للمعاينة",
      ariaLabel: "العودة للمعاينة",
    },
    scrollToTop: {
      ariaLabel: "التمرير للأعلى",
    },
    navbar: {
      brand: "PatternCraft",
      twitterAriaLabel: "تويتر (Twitter)",
      githubAriaLabel: "جيت هاب (GitHub)",
    },
    language: {
      en: "English",
      ar: "العربية",
    },
  },
};
