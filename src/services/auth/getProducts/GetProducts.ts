import { BASE_URL } from "@/services/api/api";
import axios from "axios";

interface GetProductsParams {
  id?: string;
  type?: "category" | "subcategory";
  page: number;
  discount?: string;
  priceOneM?: boolean;
  price500?: boolean;
  minPrice?: string;
  maxPrice?: string;
  discounts?: boolean;
  inStock?: boolean;
}

export const getProducts = async ({
  id,
  type,
  page,
  minPrice,
  maxPrice,
  discount,
  priceOneM,
  price500,
  discounts,
  inStock,
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

  if (minPrice) {
    url += `&price[gte]=${minPrice}`;
  }

  if (maxPrice) {
    url += `&price[lte]=${maxPrice}`;
  }

  if (discount) {
    url += `&discount[gt]=0`;
  }

  if (discounts) {
    url += `&discount[gte]=1`;
  }

  if (inStock) {
    url += `&quantity[gte]=1`;
  }

  const response = await axios.get(url);
  return response.data;
};
