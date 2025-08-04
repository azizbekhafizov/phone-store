import React from "react";
import { useStorage } from "../contexts/StorageContext";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaHeart } from "react-icons/fa";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart } = useStorage();

  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
      </h2>

      {wishlist.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          <br />
          <Link
            to="/"
            className="mt-4 inline-block text-blue-600 hover:underline text-sm"
          >
            ← Back to Shop
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className=" border border-gray-300 rounded-2xl shadow-sm hover:shadow-md transition duration-300 p-4 flex flex-col justify-between"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-[250px] object-contain rounded-xl mb-4 pt-4"
              />

              <div>
                <h3 className="text-lg font-semibold text-neutral-800 truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500">{item.brand}</p>
                <p className="text-lg font-semibold text-black mt-2">
                  ${item.price}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <button
                  onClick={() => addToCart(item)}
                  className="bg-black/90 text-white px-4 py-2 text-sm font-medium rounded-xl hover:bg-black transition"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 hover:text-red-700 text-lg"
                  title="Remove"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
