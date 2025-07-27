import React from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const CartPage = () => {
  const { cart, removeFromCart, totalPrice, clearCart } = useCart();
  const { user } = useUser();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const submitOrder = async () => {
    if (!cart.length) return;
    try {
      const order = {
        user: user || null,
        items: cart,
        total: totalPrice,
        createdAt: serverTimestamp(),
      };
      await addDoc(collection(db, "orders"), order);
      clearCart();
      navigate("/order-confirmation");
    } catch (error) {
      console.error("Error submitting order:", error);
      alert(t("cart.error"));
    }
  };

  if (!cart.length) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-4">{t("cart.title")}</h1>
        <p className="text-gray-600">{t("cart.empty")}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">{t("cart.title")}</h1>

      <ul className="space-y-4 mb-6">
        {cart.map((item, index) => (
          <li key={index} className="border p-4 rounded">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold capitalize">
                  {item.id.replace(/-/g, " ")}
                </h2>
                <p className="text-sm text-gray-600">
                  {t("cart.size")}: {item.size}, {t("cart.material")}: {item.material}, {t("cart.qty")}: {item.quantity}
                </p>
              </div>
              <div className="text-right">
                <p className="text-blue-700 font-bold">
                  {item.price.toFixed(2)} OMR
                </p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  {t("cart.remove")}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="text-lg font-bold text-right mb-4">
        {t("cart.total")}: {totalPrice.toFixed(2)} OMR
      </div>

      <div className="text-right">
        <button
          onClick={clearCart}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          {t("cart.clear")}
        </button>
        <button
          onClick={submitOrder}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 ml-4"
        >
          {t("cart.submit")}
        </button>
      </div>
    </div>
  );
};

export default CartPage;
