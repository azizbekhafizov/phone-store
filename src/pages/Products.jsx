"use client";
import React, { useEffect, useState } from "react";
import { Heart, ChevronDown, ChevronUp } from "lucide-react";
import { useSearch } from "../contexts/SearchContext";
import { useStorage } from "../contexts/StorageContext";
import { Link } from "react-router-dom";

const PRODUCTS_PER_PAGE = 9;

export default function SmartphoneCatalog() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [brandOpen, setBrandOpen] = useState(true);
  const [brandSearch, setBrandSearch] = useState("");

  const { searchTerm } = useSearch();
  const { wishlist, cart, toggleWishlist, addToCart } = useStorage();

  useEffect(() => {
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        const brandCounts = data.products.reduce((acc, product) => {
          acc[product.brand] = (acc[product.brand] || 0) + 1;
          return acc;
        }, {});
        const brandList = Object.keys(brandCounts).map((brand) => ({
          name: brand,
          count: brandCounts[brand],
        }));
        setBrands(brandList);
      });
  }, []);

  const filteredProducts = products
    .filter((p) => selectedBrand === "All" || p.brand === selectedBrand)
    .filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(
    start,
    start + PRODUCTS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex gap-10">
        <aside className="w-1/4 hidden md:block">
          <div className="border-b pb-4 mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setBrandOpen(!brandOpen)}
            >
              <h3 className="text-[17px] font-semibold">Brand</h3>
              {brandOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>

            {brandOpen && (
              <div className="mt-3">
                <input
                  type="text"
                  placeholder="Search brand..."
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  className="w-full p-2 mb-3 rounded-md border border-gray-300 focus:outline-none text-sm"
                />

                <ul className="space-y-2 max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300 text-sm">
                  <li>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="brand"
                        checked={selectedBrand === "All"}
                        onChange={() => {
                          setSelectedBrand("All");
                          setCurrentPage(1);
                        }}
                      />
                      <span className="flex justify-between w-full">
                        All{" "}
                        <span className="text-gray-400">
                          ({products.length})
                        </span>
                      </span>
                    </label>
                  </li>
                  {brands
                    .filter((b) =>
                      b.name.toLowerCase().includes(brandSearch.toLowerCase())
                    )
                    .map((brand) => (
                      <li key={brand.name}>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="brand"
                            checked={selectedBrand === brand.name}
                            onChange={() => {
                              setSelectedBrand(brand.name);
                              setCurrentPage(1);
                            }}
                          />
                          <span className="flex justify-between w-full">
                            {brand.name}
                            <span className="text-gray-400">
                              ({brand.count})
                            </span>
                          </span>
                        </label>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </aside>

        <section className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
                     <Link
            to={`/product/${product.id}`}
            className="inline-block mt-3 text-sm text-blue-600 underline hover:text-blue-800"
          >
                <div className="relative w-full h-[450px] rounded-[9px] shadow-sm hover:shadow-md transition bg-[#F6F6F6] flex flex-col justify-between p-4 cursor-pointer">
                  {/* Wishlist */}
                  <button
                    className="absolute top-3 right-3 z-10"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        wishlist.some((item) => item.id === product.id)
                          ? "text-red-500 fill-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-[200px] object-cover rounded-lg mt-2"
                  />

                  <div className="text-center mt-4">
                    <h3 className="text-[17px] font-medium leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {product.brand}
                    </p>
                    <p className="text-[22px] font-bold mt-3">
                      ${product.price}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart(product);
                    }}
                    className="mt-4 w-full h-[45px] bg-black text-white rounded-[8px] hover:bg-gray-800 transition"
                  >
                    Buy Now
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
