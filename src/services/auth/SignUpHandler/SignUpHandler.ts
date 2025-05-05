import { BASE_URL } from "@/services/api/api";
import axios from "axios";

interface IProps {
  firstName: string;
  lastName: string;
  username: string;
  phoneNumber: string;
  address: string;
  password: string;
}

export const SignUP = async ({
  firstName,
  lastName,
  username,
  phoneNumber,
  address,
  password,
}: IProps) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/signup`, {
      firstname: firstName,
      lastname: lastName,
      username: username,
      phoneNumber,
      address,
      password,
    },{
    headers: {
      "Content-Type": "application/json",
    },});
    return response;
  } catch (error: unknown) {
    if (typeof error === "object" && error !== null && "response" in error && typeof error.response === "object" && error.response !== null && "status" in error.response) {
      throw error.response;
    }
    throw error;
  }
};
