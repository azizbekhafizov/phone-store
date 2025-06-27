import { createContext, useContext, useEffect, useState } from "react";

const StorageContext = createContext();

export const StorageProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const w = JSON.parse(localStorage.getItem("wishlist")) || [];
    const c = JSON.parse(localStorage.getItem("cart")) || [];
    setWishlist(w);
    setCart(c);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.find((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  const addToCart = (product) => {
    if (!cart.find((p) => p.id === product.id)) {
      setCart((prev) => [...prev, product]);
    }
  };

  return (
    <StorageContext.Provider
      value={{ wishlist, cart, toggleWishlist, addToCart }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = () => useContext(StorageContext);
