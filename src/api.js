import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchCategoryProducts = async (category, limit = 8, skip = 0) => {
  try {
    const response = await api.get(`/category/${category}?limit=${limit}&skip=${skip}`);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
