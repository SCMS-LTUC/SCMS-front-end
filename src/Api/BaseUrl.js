// [src/Api/BaseUrl.js](src/Api/BaseUrl.js)
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7219', // Replace with your API URL
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;