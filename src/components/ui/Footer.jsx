import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t mt-16">
      <div className="bg-blue-700 text-white text-center py-4 text-xl font-bold">
        RASMLY
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 py-10 px-4 text-sm text-gray-700 dark:text-gray-300">
        <div>
          <h4 className="font-semibold mb-2">{t("footer.services")}</h4>
          <ul>
            <li>Printing</li>
            <li>Design</li>
            <li>Marketing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">{t("footer.about")}</h4>
          <ul>
            <li>{t("about")}</li>
            <li>Our Story</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">{t("footer.support")}</h4>
          <ul>
            <li>FAQs</li>
            <li>Help Center</li>
            <li>Shipping</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">{t("footer.follow")}</h4>
          <div className="flex gap-3">
            <span>🌐</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 pb-6 max-w-6xl mx-auto">
        <button
          onClick={changeLang}
          className="bg-yellow-400 text-white px-4 py-1 rounded text-sm"
        >
          {i18n.language === "en" ? "العربية" : "English"}
        </button>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 Rasmly. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
