import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, ShoppingCart } from "lucide-react";
import { useStorage } from "../contexts/StorageContext";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { wishlist, toggleWishlist, addToCart } = useStorage();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <div className="text-center py-20">Loading...</div>;

  const isWished = wishlist.some((item) => item.id === product.id);
  const images = product.images?.length ? product.images : [product.thumbnail];
  const displayImages = Array(4).fill(images[0]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <button
        onClick={() => navigate("/shop")}
        className="mb-6 inline-flex items-center gap-2 text-sm border border-gray-300 hover:border-black hover:bg-gray-100 transition px-4 py-2 rounded-lg text-gray-700"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Shop
      </button>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="flex md:flex-col gap-2 md:col-span-1">
          {displayImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className="w-20 h-20 object-cover rounded-lg shadow-sm border border-gray-200 hover:border-black transition duration-200"
            />
          ))}
        </div>

        <div className="md:col-span-4 space-y-6">
          <div className="flex justify-center md:justify-start">
            <img
              src={images[0]}
              alt={product.title}
              className="object-contain max-w-md max-h-[320px] w-full rounded-lg shadow-md"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              {product.title || "Unknown Product"}
            </h1>
            <p className="text-sm text-gray-500 mb-3">
              {product.brand || "Apple"}
            </p>
            <p className="text-4xl font-bold text-black mb-4">
              ${product.price || "0.00"}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {product.description ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600 mt-4">
            <p>
              <span className="font-medium">Screen size:</span> 6.7”
            </p>
            <p>
              <span className="font-medium">Main camera:</span> 48+12+12 MP
            </p>
            <p>
              <span className="font-medium">Front camera:</span> 12 MP
            </p>
            <p>
              <span className="font-medium">Battery:</span> 4323 mAh
            </p>
            <p>
              <span className="font-medium">CPU:</span> Apple A16 Bionic
            </p>
            <p>
              <span className="font-medium">Resolution:</span> 2796x1290
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => toggleWishlist(product)}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition bg-red-500 text-white`}
            >
              <Heart />
              Add to Wishlist
            </button>

            <button
              onClick={() => addToCart(product)}
              className="px-6 py-3 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
            >
              <ShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
