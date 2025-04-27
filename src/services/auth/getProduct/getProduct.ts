import { BASE_URL } from "@/services/api/api";
import axios from "axios";

export const getProduct = async (productId: string) => {
  const fetchProduct = async () => {
    const response = await axios.get(`${BASE_URL}/api/products/${productId}`);
    return response.data.data.product;
  };
  const product = await fetchProduct();
  return { product };
};
