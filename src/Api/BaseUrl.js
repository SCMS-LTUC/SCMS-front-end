// src/Api/BaseUrl.js
import axios from "axios";

const baseUrl = "http://localhost:5128/api";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
