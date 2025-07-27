import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const offers = [
  {
    key: "business_cards",
    nameEn: "Business Cards",
    nameAr: "بطاقات العمل",
    image: "/images/business_card.jpg",
    price: 4,
    discount: 2.5,
  },
  {
    key: "stickers",
    nameEn: "Stickers",
    nameAr: "الملصقات",
    image: "/images/sticker.jpg",
    price: 3,
    discount: 1.8,
  },
  {
    key: "flyers",
    nameEn: "Flyers",
    nameAr: "منشورات",
    image: "/images/flyer.jpg",
    price: 6,
    discount: 4,
  },
];

const SpecialOffers = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-8">
          {t("offers.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.key}
              className="bg-white shadow rounded overflow-hidden"
            >
              <img
                src={offer.image}
                alt={offer.nameEn}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-gray-800">
                  {isAr ? offer.nameAr : offer.nameEn}
                </h3>
                <div className="mt-2">
                  <span className="line-through text-sm text-gray-500 me-2">
                    {offer.price.toFixed(2)} OMR
                  </span>
                  <span className="text-green-600 text-lg font-bold">
                    {offer.discount.toFixed(2)} OMR
                  </span>
                </div>
                <Link
                  to={`/product/${offer.key}`}
                  className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  {t("offers.order")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
