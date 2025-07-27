import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LoginPopup from "./LoginPopup";
import { useUser } from "../../context/UserContext";
import MegaMenu from "./MegaMenu";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const { user, isLoggedIn, login, logout } = useUser();
  const { i18n, t } = useTranslation();
  const [showLogin, setShowLogin] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  const groupedByAlphabet = (list) => {
    return list.reduce((acc, item) => {
      const letter = item[0].toUpperCase();
      acc[letter] = acc[letter] || [];
      acc[letter].push(item);
      return acc;
    }, {});
  };

  // داده‌ها:
  const products = [    "Acrylic Boards",
    "A-Frame Signs",
    "Aluminum Boards",
    "Banners",
    "Biz Card Magnets",
    "Blank Letterheads",
    "Booklets",
    "Bookmarks",
    "Brochures",
    "Business Cards",
    "Calendars",
    "Canvas Prints",
    "Car Magnets",
    "Cardboards",
    "Catalogs",
    "Club Flyers",
    "Collectors Cards",
    "Corrugated Boards",
    "Door Hangers",
    "Envelopes - Custom",
    "Envelopes - Logo",
    "Event Tickets",
    "Floor Decals",
    "Flyers",
    "Foam Boards",
    "Folded Biz Cards",
    "Folded Hang Tags",
    "Folders",
    "Framed Prints",
    "Greeting Cards",
    "Hang Tags",
    "Hats",
    "Letterheads",
    "Metal Wall Prints",
    "Mini Menus",
    "Mounted Wall Prints",
    "Mouse Pads",
    "Mugs",
    "Notepads",
    "Photo Plaques",
    "Photo Books",
    "Polos",
    "Postcards",
    "Postcard Magnets",
    "Posters - Bulk",
    "Posters - Large Format",
    "Puzzles",
    "PVC Boards",
    "Rack Cards",
    "Retractable Banners",
    "Rip Cards",
    "Roll Labels",
    "Special Shapes",
    "Staggered Flyers",
    "Stickers",
    "Sweatshirts - Crewnecks",
    "Sweatshirts - Full Zip Hoodies",
    "Sweatshirts - Hoodies",
    "Table Tents",
    "T-Shirts",
    "Window Clings",
    "Window Decals",
    "Window Perfs",
    "Yard Signs",
];
  const services = [ "Design Services",
    "Business Cards",
    "Postcards",
    "Envelopes",
    "Greeting Cards",
    "Banners",
    "Yard Signs",
    "Logo Design Services",
    "All Design Services",
    "Every Door Direct Mail ®",
    "All EDDM® Services",
    "Mailing Services",
    "All Mailing Services",
    "Direct Marketing Packages",
    "All Direct Marketing Packages",
    "Other Services",
    "Print Brokers",
    "Free Sample Kit",
];
  const socialServices = ["Instagram Ads", "TikTok Promotions", "LinkedIn Campaigns"];

  const groupedProducts = groupedByAlphabet(products);
  const groupedServices = groupedByAlphabet(services);
  const groupedSocial = groupedByAlphabet(socialServices);

  const isRTL = i18n.language === "ar";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* بالا: لوگو + سرچ + ورود */}
      <div
        className={`flex items-center justify-between h-20 px-4 sm:px-6 backdrop-blur-md bg-white/30 dark:bg-gray-800/50 shadow-md ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        {/* لوگو + منوی همبرگری */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          <Link to="/" className="text-2xl font-bold text-white">
            rasm<span className="text-blue-300">ly</span>
          </Link>
        </div>

        {/* سرچ */}
        <div className="hidden lg:block w-[500px] pl-36">
          <input
            type="text"
            placeholder={t("Search for product or service...")}
            className="w-full px-6 py-2 rounded-full bg-white/20 text-white placeholder:text-white/60 border border-white/30 focus:outline-none"
          />
        </div>

        {/* ورود، زبان، سبد خرید */}
        <div className={`items-center gap-4 ${isRTL ? "flex-row-reverse" : ""} hidden sm:flex`}>
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="text-white">
                {t("header.profile")}
              </Link>
              <button onClick={logout} className="text-red-400">
                {t("header.logout")}
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setShowLogin(true)} className="text-white">
                {t("header.login")}
              </button>
              <Link to="/register" className="text-white">
                {t("header.register")}
              </Link>
            </>
          )}
          <button onClick={toggleLang} className="text-white border px-2 rounded">
            {i18n.language === "ar" ? "EN" : "AR"}
          </button>
          <DarkModeToggle />
          <Link to="/cart" className="text-white">
            🛒
          </Link>
        </div>
      </div>

      {/* منوی موبایل */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-800 text-black dark:text-white shadow-md px-4 py-6 space-y-4">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            {t("header.home")}
          </Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
            {t("header.products")}
          </Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
            {t("header.services")}
          </Link>
          <Link to="/social" onClick={() => setMobileMenuOpen(false)}>
            {t("header.social")}
          </Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
            {t("header.about")}
          </Link>
        </div>
      )}

      {/* نوار ناوبری دسکتاپ */}
      <nav className="hidden lg:block bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border-t border-white/20">
        <div className="flex justify-center gap-10 py-3 text-white">
          <Link to="/" className="hover:text-blue-300">
            {t("header.home")}
          </Link>

          {/* محصولات، خدمات، سوشال */}
          {["products", "services", "social"].map((key) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => setActiveMenu(key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="hover:text-blue-300">{t(`header.${key}`)}</button>
{activeMenu === key && (
  <div className="fixed inset-x-0 top-[45px] bottom-0 z-50">
    <MegaMenu
      groupedItems={
        key === "products"
          ? groupedProducts
          : key === "services"
          ? groupedServices
          : groupedSocial
      }
      basePath={`/${key}`}
    />
  </div>
)}
            </div>
          ))}

          <Link to="/about" className="hover:text-blue-300">
            {t("header.about")}
          </Link>
        </div>
      </nav>

      {/* پاپ‌آپ لاگین */}
      {showLogin && (
        <LoginPopup
          onClose={() => setShowLogin(false)}
          onLoginSuccess={(userData) => login(userData)}
        />
      )}
    </header>
  );
};

export default Header;