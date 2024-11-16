import React, { useState } from 'react';
import { updateInventory, updateOrderStatus } from '../services/adminService';

const AdminDashboard = () => {
  const [inventoryType, setInventoryType] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleUpdateInventory = async () => {
    try {
      await updateInventory({ type: inventoryType, quantity });
      alert("Inventory updated");
    } catch (error) {
      console.error("Inventory update failed", error);
    }
  };

  const handleUpdateOrderStatus = async (orderId, status) => {
    try {
      await updateOrderStatus({ orderId, status });
      alert("Order status updated");
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Update Inventory</h3>
        <input type="text" placeholder="Type" onChange={(e) => setInventoryType(e.target.value)} />
        <input type="number" placeholder="Quantity" onChange={(e) => setQuantity(Number(e.target.value))} />
        <button onClick={handleUpdateInventory}>Update Inventory</button>
      </div>
      <div>
        <h3>Manage Orders</h3>
        {/* Order management UI here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
