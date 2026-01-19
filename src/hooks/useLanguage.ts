import { useLocation } from "react-router-dom";
import { translations } from "@/translations/translations";

export const useLanguage = () => {
    const location = useLocation();
    const isSpanish = location.pathname.startsWith("/es");
    const lang = isSpanish ? "es" : "en";
    const t = translations[lang];

    return { t, lang, isSpanish };
};
