import React from "react";
import { MousePointerClick, Sliders, Upload, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";

const steps = [
  {
    icon: <MousePointerClick size={32} />,
    titleKey: "step1.title",
    descKey: "step1.desc",
  },
  {
    icon: <Sliders size={32} />,
    titleKey: "step2.title",
    descKey: "step2.desc",
  },
  {
    icon: <Upload size={32} />,
    titleKey: "step3.title",
    descKey: "step3.desc",
  },
  {
    icon: <CreditCard size={32} />,
    titleKey: "step4.title",
    descKey: "step4.desc",
  },
];

const HowToOrder = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl mt-32 font-bold text-center text-blue-800 mb-8">
          {t("order.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 border rounded-lg shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 mb-3 flex justify-center">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg">
                {t(`order.${step.titleKey}`)}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {t(`order.${step.descKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;
