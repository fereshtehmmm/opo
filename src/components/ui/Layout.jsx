import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

const Layout = ({ children }) => {
    const { i18n } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
    
  );


  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <div className="flex flex-col min-h-screen bg-transparent">

      <Header />
      <main className="flex-1 px-0 py-0 bg-transparent">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
