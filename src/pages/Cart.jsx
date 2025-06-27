import React from "react";
import { useStorage } from "../contexts/StorageContext";
import { Minus, Plus, X } from "lucide-react";

export default function Cart() {
  const { cart, setCart } = useStorage();

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const estimatedTax = 50;
  const shipping = 29;
  const total = subtotal + estimatedTax + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left - Cart Items */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border-b pb-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-[90px] h-[90px] object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-gray-400 text-sm">#{item.id}</p>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-3 py-1 text-lg hover:bg-gray-200"
                >
                  <Minus size={16} />
                </button>
                <span className="px-4">{item.quantity || 1}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-3 py-1 text-lg hover:bg-gray-200"
                >
                  <Plus size={16} />
                </button>
              </div>

              <p className="text-xl font-semibold">${item.price}</p>

              <button
                onClick={() => removeItem(item.id)}
                className="ml-2 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Right - Order Summary */}
      <div className="border p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        <input
          type="text"
          placeholder="Discount code / Promo code"
          className="w-full mb-3 p-2 border rounded-md text-sm"
        />
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Your bonus card number"
            className="flex-1 p-2 border rounded-md text-sm"
          />
          <button className="bg-black text-white px-4 rounded-md">Apply</button>
        </div>

        <div className="text-sm space-y-2 border-t pt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Tax</span>
            <span>${estimatedTax}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated shipping & Handling</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold pt-2 border-t">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>

        <button className="w-full mt-6 h-[45px] bg-black text-white rounded-md hover:bg-gray-800 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
