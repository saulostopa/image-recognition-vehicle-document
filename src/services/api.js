import axios from "axios";

const api = axios.create({
  baseURL: "http://52.45.53.91"
  // baseURL: "http://localhost:3000"
});

export default api;
