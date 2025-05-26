// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL_USER_STORE, // e.g. your RDS‐backed Node API
});

export default api;
