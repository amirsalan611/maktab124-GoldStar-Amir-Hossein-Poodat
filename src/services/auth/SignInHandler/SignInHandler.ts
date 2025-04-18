import { BASE_URL } from "@/services/api/api";
import axios from "axios";


export const SignIn = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, {
      username,
      password,
    });
    return response;
  } catch (error: any) {
    throw error.response;
  }
};
