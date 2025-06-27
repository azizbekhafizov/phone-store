"use client";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useStorage } from "../contexts/StorageContext";
import { Link } from "react-router-dom";

const MiniProducts = () => {
  const [products, setProducts] = useState([]);
  const { wishlist, toggleWishlist, addToCart } = useStorage();

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=smartphone&limit=4")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Discounts up to -50%</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="relative w-full h-[432px] rounded-[9px] shadow-sm hover:shadow-md transition duration-300 bg-[#F6F6F6] flex flex-col justify-between p-4"
          >
            <button
              className="absolute top-3 right-3 z-10"
              onClick={(e) => {
                e.preventDefault();
                toggleWishlist(product);
              }}
            >
              <Heart
                className={`w-6 h-6 ${
                  isInWishlist(product.id)
                    ? "text-red-500 fill-red-500"
                    : "text-gray-400"
                }`}
              />
            </button>

            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-[220px] object-cover rounded-lg mt-2"
            />

            <div className="text-center mt-4">
              <h3 className="text-[18px] leading-[24px] font-medium">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{product.brand}</p>
              <p className="text-[24px] leading-[24px] mt-4 font-semibold">
                ${product.price}
              </p>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="mt-6 w-full h-[48px] bg-black text-white rounded-[8px] hover:bg-gray-800 transition"
            >
              Buy Now
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MiniProducts;
