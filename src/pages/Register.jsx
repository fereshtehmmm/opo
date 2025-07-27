import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Register = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      setError(t("register.error"));
      return;
    }

    const userData = {
      username: form.username,
      email: form.email,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/profile");
  };

  return (
    <div className="max-w-md mx-auto mt-40 bg-white shadow-md rounded p-6">
      <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">
        {t("register.title")}
      </h1>

      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">
            {t("register.username")}
          </label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            {t("register.email")}
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            {t("register.password")}
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          {t("register.signup")}
        </button>
      </form>

      <div className="text-center mt-4 text-sm">
        {t("register.have_account")}{" "}
        <span
          onClick={() => navigate("/")}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          {t("register.signin")}
        </span>
      </div>
    </div>
  );
};

export default Register;
