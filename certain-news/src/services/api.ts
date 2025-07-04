import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;
// console.log(`API: ${API_BASE_URL}`);

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export default api;