// pages.js ---> apiService.js ---> Backend API
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3100",
});

// signup function that interacts with backend API
export const signup = async (data) => {
  const response = await api.post("/api/auth/signup", data);
  return response.data;
};

// login function that interacts with backend API
export const login = async (data) => {
  const response = await api.post("/api/auth/login", data);
  return response.data;
};
