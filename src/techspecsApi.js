// techspecsApi.js
import axios from "axios";

const API_KEY = "d4853ad5-feb5-4896-9eac-91355c9ca7be";
const BASE_URL = "https://api.techspecs.io/v5";

// 1. Brendlar ro'yxatini olish
export async function getBrands() {
  try {
    const response = await axios.get(`${BASE_URL}/brands`, {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    console.log("📱 Brendlar:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Brendlarni olishda xatolik:", error.response?.data || error.message);
    return null;
  }
}

// 2. Mahsulotlar qidirish (model nomi bilan)
export async function searchProducts(query) {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      headers: {
        "x-api-key": API_KEY,
      },
      params: { query },
    });
    console.log("🔍 Qidiruv natijalari:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Qidirishda xatolik:", error.response?.data || error.message);
    return null;
  }
}

// 3. Maxsus model haqida to'liq ma'lumot
export async function getProductDetails(productId) {
  try {
    const response = await axios.get(`${BASE_URL}/products/${productId}`, {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    console.log("📄 Mahsulot tafsilotlari:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Mahsulot tafsilotlarini olishda xatolik:", error.response?.data || error.message);
    return null;
  }
}
