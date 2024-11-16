import axios from 'axios';

export const login = (credentials) => axios.post('/api/auth/login', credentials);
export const register = (userData) => axios.post('/api/auth/register', userData);
export const verifyEmail = (token) => axios.get(`/api/auth/verify/${token}`);
export const forgotPassword = (email) => axios.post('/api/auth/forgot-password', { email });
