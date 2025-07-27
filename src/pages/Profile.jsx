import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) {
      navigate("/login");
    } else {
      setUser(JSON.parse(stored));
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        {t("profile.welcome", { name: user.name || user.username })}
      </h1>
      <div className="bg-white shadow rounded p-6 space-y-4">
        <p>
          <strong>{t("profile.email")}:</strong> {user.email}
        </p>
        <p>
          <strong>{t("profile.phone")}:</strong> {user.phone || t("profile.not_set")}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;