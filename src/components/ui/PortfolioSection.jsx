import React from "react";
import { useTranslation } from "react-i18next";

const portfolioItems = [
  {
    titleEn: "Restaurant Menu Design",
    titleAr: "تصميم قائمة طعام",
    image: "/images/portfolio/menu.jpg",
  },
  {
    titleEn: "Sticker Print for Café",
    titleAr: "طباعة ملصقات لمقهى",
    image: "/images/portfolio/sticker.jpg",
  },
  {
    titleEn: "Corporate Brochure",
    titleAr: "كتيب الشركة",
    image: "/images/portfolio/brochure.jpg",
  },
];

const PortfolioSection = () => {
  const { i18n, t } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">
          {t("portfolio.title")}
        </h2>
        <p className="text-center text-gray-600 mb-10">
          {t("portfolio.description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={isAr ? item.titleAr : item.titleEn}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {isAr ? item.titleAr : item.titleEn}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
