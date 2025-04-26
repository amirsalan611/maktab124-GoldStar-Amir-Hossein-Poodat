import { BASE_URL } from "@/services/api/api";
import axios from "axios";

interface GetProductsParams {
  id?: string;
  type?: "category" | "subcategory";
  page: number;
  discount?:string
}

export const getProducts = async ({
  id,
  type,
  page,
  discount,
}: GetProductsParams) => {
  let url = `${BASE_URL}/api/products?limit=10&page=${page}`;
  
  if (type && id) {
    url += `&${type}=${id}`;
  }
  if (discount) {
    url += `&discount[gt]=0`;
  }

  const response = await axios.get(url);
  return response.data;
};
