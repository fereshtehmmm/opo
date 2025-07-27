import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const OrderConfirmation = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        ✅ {t("confirmation.success")}
      </h1>
      <p className="text-gray-700 mb-6">{t("confirmation.message")}</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        {t("confirmation.back_home")}
      </Link>
    </div>
  );
};

export default OrderConfirmation;