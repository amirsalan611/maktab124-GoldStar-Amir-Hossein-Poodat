import axios from "axios";
import { BASE_URL } from "../../api/api";

export const getCategoreis = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/categories`);
    return response.data.data.categories;
  } catch (error) {
    throw error;
  }
};
