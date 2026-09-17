import axios from "axios";
export const BASE_URL = "https://mockapi-mauve.vercel.app/api/v1"; //base_url

//axios instance
// use create method for creating axios instances
const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});


export default api;