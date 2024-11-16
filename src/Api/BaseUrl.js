// src/Api/BaseUrl.js
import axios from 'axios';


const baseUrl = 'https://localhost:7219/api';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;