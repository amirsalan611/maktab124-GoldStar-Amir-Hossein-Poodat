import axios from "axios";
import { BASE_URL } from "../../api/api";

export const getSubCategories = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/subcategories?limit=full`
    );
    return response.data.data.subcategories;
  } catch (error) {
    throw error;
  }
};
