import axios from "axios";
export const BASE_URL = "https://api.escuelajs.co/api/v1";

//axios instance
// use create method for creating axios instances
const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});


export default api;