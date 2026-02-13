import { Languages } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "./button";

interface LanguageToggleProps {
  theme: "light" | "dark";
}

export function LanguageToggle({ theme }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();
  const isDark = theme === "dark";

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={`gap-2 ${isDark ? "text-gray-300 hover:text-white hover:bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        }`}
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === "en" ? "العربية" : "English"}
      </span>
    </Button>
  );
}
