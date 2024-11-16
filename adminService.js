import axios from 'axios';

export const fetchInventory = () => axios.get('/api/admin/inventory');
export const updateInventory = (inventoryData) => axios.put('/api/admin/inventory', inventoryData);
export const updateOrderStatus = (orderId, status) => axios.put('/api/admin/order-status', { orderId, status });
