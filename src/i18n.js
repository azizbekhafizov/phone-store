import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import uz from "./translations/uz.json";
import ru from "./translations/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      ru: { translation: ru }
      // ❌ en qo‘shilmaydi
    },
    fallbackLng: false, // ❗ fallback yo‘q — inglizcha matnlarni o‘zi yozilgan bo‘ladi
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
