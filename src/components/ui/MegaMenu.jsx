import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaRegIdCard,
  FaBoxOpen,
  FaFileAlt,
  FaTshirt,
  FaCalendarAlt,
  FaTags,
} from "react-icons/fa";

const featuredItems = [
  {
    label: "Business Cards",
    icon: <FaRegIdCard />,
    path: "/products/business-cards",
    icon: "💼"
  },
  {
    label: "Flyers",
    icon: <FaFileAlt />,
    path: "/products/flyers",
    icon: "📄"
  },
  {
    label: "Apparel Printing",
    icon: <FaTshirt />,
    path: "/products/apparel",
    icon: "👕" 
  },
  {
    label: "Calendars",
    icon: <FaCalendarAlt />,
    path: "/products/calendars",
    icon: "📆"
  },
  {
    label: "Signs & Banners",
    icon: <FaTags />,
    path: "/products/signs",
    icon: "🪧"
  },
];

const MegaMenu = ({ groupedItems, basePath }) => {
  const { t } = useTranslation();

  return (
    <div className="w-screen bg-fuchsia-900/80 backdrop-blur-3xl shadow-lg text-w grid grid-cols-12 gap-6 px-12 py-8 border-t border-white/20">
      {/* Featured Column */}
      <div className="col-span-3 space-y-4">
        <h3 className="font-bold uppercase text-withe-700 text-sm mb-2">
          {t("menu.featured")}
        </h3>
        {featuredItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="flex items-center gap-3 text-sm hover:text-gray-300 transition"
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Grouped Columns */}
      <div className="col-span-9 grid grid-cols-4 gap-6">
        {Object.entries(groupedItems).map(([letter, items]) => (
          <div key={letter}>
            <h4 className="font-bold text-withe-700 border-b pb-1 mb-2">
              {letter}
            </h4>
            <ul className="space-y-1">
              {items.map((item, i) => (
                <li key={i}>
                  <Link
                    to={`${basePath}/${item
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-sm hover:text-blue-500 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="col-span-12 text-right mt-6">
        <Link
          to={basePath}
          className="inline-block border px-4 py-1 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition"
        >
          {t("menu.viewAll")}
        </Link>
      </div>
    </div>
  );
};

export default MegaMenu;
