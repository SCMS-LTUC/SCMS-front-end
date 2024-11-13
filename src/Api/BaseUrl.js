// [src/Api/BaseUrl.js](src/Api/BaseUrl.js)
import axios from 'axios';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode'; // Import jwt-decode

const instance = axios.create({
  baseURL: 'https://localhost:7219', // Replace with your API URL
  withCredentials: true
});

// Function to check if token is about to expire
const isTokenExpiring = (token, buffer = 60) => {
  const decoded = jwtDecode(token);
  const currentTime = Math.floor(Date.now() / 1000);
  return decoded.exp - currentTime < buffer;
};

instance.interceptors.request.use(async (config) => {
  const token = Cookies.get('AuthToken');
  if (token) {
    if (isTokenExpiring(token)) {
      // Refresh token
      const refreshToken = Cookies.get('RefreshToken');
      try {
        const response = await axios.post('https://localhost:7219/api/Account/Refresh', {
          accessToken: token,
          refreshToken: refreshToken
        });
        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;
        Cookies.set('AuthToken', newAccessToken);
        Cookies.set('RefreshToken', newRefreshToken);
        config.headers.Authorization = `Bearer ${newAccessToken}`;
      } catch (error) {
        // Handle refresh token failure, e.g., redirect to login
        console.error('Token refresh failed:', error);
        // Optionally, navigate to the login page
      }
    } else {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  return response;
}, async error => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    try {
      const refreshToken = Cookies.get('RefreshToken');
      const response = await axios.post('https://localhost:7219/api/Account/Refresh', {
        accessToken: Cookies.get('AuthToken'),
        refreshToken: refreshToken
      });
      const { accessToken, refreshToken: newRefreshToken } = response.data;
      Cookies.set('AuthToken', accessToken);
      Cookies.set('RefreshToken', newRefreshToken);
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      return instance(originalRequest);
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  }
  return Promise.reject(error);
});

export default instance;