import axios from 'axios';
import toast from 'react-hot-toast';

axios.interceptors.response.use(
  (response) => {
    // You can handle and modify the response data here if needed
    return response;
  },
  (error) => {
    // You can handle errors here, e.g., show a toast message, logout on certain errors, etc.
    const errorMessage = error?.response?.data?.desc || error?.message;
    toast.error(errorMessage);
    return Promise.reject(error);
  }
);

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const axiosWrapper = async (method, url, data = false, token, isFormData = false) => {
  try {
    const config = {
      method,
      url,
      ...axiosConfig
    };

    if (token) config.headers['Authorization'] = `Bearer ${token}`;

    if (isFormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
      config.data = data; // Use FormData directly for FormData requests
    } else {
      if (data) config.data = data;
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error?.response?.data?.message || error?.message;
  }
};

export default axiosWrapper;
