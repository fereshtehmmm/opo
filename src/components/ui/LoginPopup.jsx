import React, { useState } from "react";

const LoginPopup = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: validate credentials
    const user = { name: "rasmly-user", email, phone: "" };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");
    onLoginSuccess(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
      <div className="bg-white rounded shadow-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
