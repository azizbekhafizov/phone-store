"use client";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const MiniProducts = () => {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=smartphone&limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Discounts up to -50%</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative w-full h-[432px] rounded-[9px] shadow-sm hover:shadow-md transition duration-300 bg-[#F6F6F6] flex flex-col justify-between p-4"
          >
            {/* Like Button */}
            <button
              className="absolute top-3 right-3"
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart
                className={`w-6 h-6 ${
                  wishlist.includes(product.id)
                    ? "text-red-500 fill-red-500"
                    : "text-gray-400"
                }`}
              />
            </button>

            {/* Product Image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-[220px] object-cover rounded-lg mt-2"
            />

            {/* Text Info */}
            <div className="text-center mt-4">
              <h3 className="text-[18px] leading-[24px] font-medium">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{product.brand}</p>
              <p className="text-[24px] leading-[24px] mt-4 font-semibold">
                ${product.price}
              </p>
            </div>

            {/* Buy Button */}
            <button className="mt-6 w-full h-[48px] bg-black text-white rounded-[8px] hover:bg-gray-800 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniProducts;
