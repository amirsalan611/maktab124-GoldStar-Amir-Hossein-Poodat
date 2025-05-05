import axios from "axios";
import { BASE_URL } from "@/services/api/api";

export const getProductById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/api/products/${id}`);
  return response.data.data.product;
};
