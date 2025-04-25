import { BASE_URL } from "@/services/api/api";
import axios from "axios";

interface GetProductsParams {
  id: string;
  type: "category" | "subcategory";
  page: number;
}

export const getProducts = async ({ id, type, page }: GetProductsParams) => {
  const response = await axios.get(
    `${BASE_URL}/api/products?limit=10&${type}=${id}&page=${page}`
  );
  return response.data;
};
