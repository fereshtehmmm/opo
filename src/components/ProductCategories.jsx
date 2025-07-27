import { Link } from "react-router-dom";
import {
  CreditCard,
  Package,
  FileText,
  Shirt,
  Calendar,
  LayoutTemplate,
} from "lucide-react";

const categories = [
  {
    key: "business_cards",
    label: "Business Cards",
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
  },
  {
    key: "packaging",
    label: "Packaging",
    icon: <Package className="w-8 h-8 text-yellow-600" />,
  },
  {
    key: "flyers",
    label: "Flyers",
    icon: <FileText className="w-8 h-8 text-purple-600" />,
  },
  {
    key: "apparel",
    label: "Apparel Printing",
    icon: <Shirt className="w-8 h-8 text-rose-500" />,
  },
  {
    key: "calendar",
    label: "Calendars",
    icon: <Calendar className="w-8 h-8 text-green-600" />,
  },
  {
    key: "banners",
    label: "Signs & Banners",
    icon: <LayoutTemplate className="w-8 h-8 text-orange-500" />,
  },
];

const ProductCategories = () => (
  <section className="py-10 px-6 bg-white">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 px-4 py-8 text-center">
      {categories.map((item) => (
        <Link
          to={`/products/${item.key}`}
          key={item.key}
          className="flex flex-col items-center hover:scale-105 transition"
        >
          {item.icon}
          <span className="mt-2 text-sm font-medium text-gray-700">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  </section>
);

export default ProductCategories;
