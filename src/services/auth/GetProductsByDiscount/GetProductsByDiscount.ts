import { BASE_URL } from "@/services/api/api";
import axios from "axios";

export const GetProductsByDiscount = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/products?discount[gt]=0&limit=8`
    );
    const result = await response.data.data.products;
    return result;
  } catch (error) {
    console.log(error);
  }
};
