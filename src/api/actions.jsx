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
    const { data } = await axiosWrapper('post', `${import.meta.env.VITE_API_URL}/api/service`, body, token);
    return data;
  } catch (error) {
    console.error('Error creating shop:', error);
    throw error; // Throw error to be handled by the calling function
  }
};
export const getServices = async (userId) => {
  try {
    const { token } = useAuth();
    const { data } = await axiosWrapper('get', `${import.meta.env.VITE_API_URL}/api/service?userId=${userId}`, false, token);
    return data;
  } catch (error) {
    console.error('Error fetching shop:', error);
    throw error; // Throw error to be handled by the calling function
  }
};

export const deleteService = async (id) => {
  try {
    const { token } = useAuth();
    const { data } = await axiosWrapper('delete', `${import.meta.env.VITE_API_URL}/api/service/delete/${id}`, {}, token);
    return data;
  } catch (error) {
    console.error('Error creating shop:', error);
    throw error; // Throw error to be handled by the calling function
  }
};
export const getService = async (id) => {
  try {
    const { token } = useAuth();
    const { data } = await axiosWrapper('get', `${import.meta.env.VITE_API_URL}/api/service/${id}`, false, token);
    return data;
  } catch (error) {
    console.error('Error fetching shop:', error);
    throw error; // Throw error to be handled by the calling function
  }
};
