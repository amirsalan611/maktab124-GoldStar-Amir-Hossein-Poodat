import { BASE_URL } from "@/services/api/api";
import axios from "axios";

interface GetProductsParams {
  id?: string;
  type?: "category" | "subcategory";
  page: number;
  discount?: string;
  priceOneM?: boolean;
  price500?: boolean;
}

export const getProducts = async ({
  id,
  type,
  page,
  discount,
  priceOneM,
  price500,
}: GetProductsParams) => {
  let url = `${BASE_URL}/api/products?limit=10&page=${page}`;

  if (type && id) {
    url += `&${type}=${id}`;
  }
  if (priceOneM) {
    url += `&price[lt]=1000000`;
  }
  if (price500) {
    url += `&price[lt]=500000`;
  }
  if (discount) {
    url += `&discount[gt]=0`;
  }

  const response = await axios.get(url);
  return response.data;
};
