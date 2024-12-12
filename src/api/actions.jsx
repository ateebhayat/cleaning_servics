/* eslint-disable react-hooks/rules-of-hooks */
import useAuth from '../hooks/use-auth';
import axiosWrapper from '../utils/api';

export const loginUser = async ({ email, password }) => {
  try {
    const { data } = await axiosWrapper('post', `${import.meta.env.VITE_API_URL}/api/user/login`, { email, password });
    return data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error; // Throw error to be handled by the calling function
  }
};

export const registerUser = async ({ email, password, role }) => {
  try {
    const { data } = await axiosWrapper('post', `${import.meta.env.VITE_API_URL}/api/user/register`, { email, password, role });
    return data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Throw error to be handled by the calling function
  }
};
export const createShop = async (body) => {
  try {
    const { token } = useAuth();
    const { data } = await axiosWrapper('post', `${import.meta.env.VITE_API_URL}/api/shop`, body, token);
    return data;
  } catch (error) {
    console.error('Error creating shop:', error);
    throw error; // Throw error to be handled by the calling function
  }
};
export const getShops = async (userId) => {
  try {
    const { token } = useAuth();
    const { data } = await axiosWrapper('get', `${import.meta.env.VITE_API_URL}/api/shop?userId=${userId}`, false, token);
    return data;
  } catch (error) {
    console.error('Error fetching shop:', error);
    throw error; // Throw error to be handled by the calling function
  }
};

export const verifyOtp = async ({ otp }) => {
  try {
    const { data } = await axiosWrapper('put', `${import.meta.env.VITE_API_URL}/api/user/verify/otp`, { otp });
    return data;
  } catch (error) {
    console.error('Error verifying:', error);
    throw error; // Throw error to be handled by the calling function
  }
};
