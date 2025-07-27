import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">All Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-600">
                  Order ID: <span className="font-mono">{order.id}</span>
                </p>
                <p className="text-sm text-gray-600">
                  {order.createdAt?.toDate().toLocaleString() || "—"}
                </p>
              </div>

              <p className="mb-2 text-sm">
                <strong>User:</strong>{" "}
                {order.user?.email || "Guest"}
              </p>

              <ul className="mb-2 text-sm list-disc list-inside">
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.id.replace(/-/g, " ")} – {item.quantity} pcs –{" "}
                    {item.material}, {item.size} – {item.price?.toFixed(2)} OMR
                  </li>
                ))}
              </ul>

              <p className="text-right font-bold">
                Total: {order.total?.toFixed(2)} OMR
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminOrders;