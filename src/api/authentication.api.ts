import { appBaseUrlInstance } from "../utils/AxiosApi/AxiosApi";

const API_BASE = "/api/Users";

export const doLogin = async (requestBody: {
  username: string;
  password: string;
}) => {
  try {
    const response = await appBaseUrlInstance({
      method: "POST",
      url: `${API_BASE}/authenticate`,
      data: requestBody,
    });
    return response?.data;
  } catch (error) {
    console.error("Failed to login:", error);
    throw error;
  }
};

export const getJwtToken = async (requestBody: {
  userId: number;
  otp: string;
}) => {
  try {
    const response = await appBaseUrlInstance({
      method: "POST",
      url: `${API_BASE}/verify-otp`,
      data: requestBody,
    });
    return response?.data;
  } catch (error) {
    console.error("Failed to login:", error);
    throw error;
  }
};

getJwtToken

export const getUserById = async (userId: string) => {
  try {
    const response = await appBaseUrlInstance({
      method: "GET",
      url: `${API_BASE}/${userId}`,
    });
    return response?.data;
  } catch (error) {
    console.error("Failed to getUserById:", error);
    throw error;
  }
};
