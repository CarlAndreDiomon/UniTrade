import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://unitrade.carlandrediomon.me/api",
  withCredentials: true,
});
