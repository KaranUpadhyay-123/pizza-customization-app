import axios from 'axios';

export const placeOrder = (orderData) => axios.post('/api/order', orderData);
export const getOrderStatus = (orderId) => axios.get(`/api/order/status/${orderId}`);
export const processPayment = (amount) => axios.post('/api/payment', { amount });
