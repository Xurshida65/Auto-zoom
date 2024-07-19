import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";
import ruTranslation from "../public/locales/ru.json"
import enTranslation from "../public/locales/en.json"

const language = localStorage.getItem("i18nextLng") || "en"

i18n 
.use(Backend)
.use(languageDetector)
.use(initReactI18next)
.init({
    fallBackLng: "en",
    lng: language,
    debug:true,
    resources: {
        en:{translation: enTranslation},
        ru:{translation: ruTranslation}
    }

})

export default i18n;