import React from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Sticker,
  BookOpen,
  FileText,
  Calendar,
  Gift
} from "lucide-react";

const categories = [
  { key: "business_cards", label: "Business Cards", icon: <CreditCard size={48} /> },
  { key: "stickers", label: "Stickers", icon: <Sticker size={48} /> },
  { key: "brochures", label: "Brochures", icon: <BookOpen size={48} /> },
  { key: "flyers", label: "Flyers", icon: <FileText size={48} /> },
  { key: "calendars", label: "Calendars", icon: <Calendar size={48} /> },
  { key: "gift_cards", label: "Gift Cards", icon: <Gift size={48} /> }
];

const ProductsPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            to={`/product/${cat.key}`}
            key={cat.key}
            className="block bg-white shadow hover:shadow-lg transition rounded p-6 text-center border"
          >
            <div className="text-blue-600 flex justify-center mb-4">
              {cat.icon}
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{cat.label}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
