import React, { useEffect, useState } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-6">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="p-4 border rounded shadow">
              <img src={item.thumbnail} alt={item.title} className="h-40 w-full object-cover mb-2" />
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.brand}</p>
              <p className="text-lg font-bold">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
