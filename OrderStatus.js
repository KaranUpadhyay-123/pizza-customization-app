import React, { useEffect, useState } from 'react';
import { getOrderStatus } from '../services/orderService';

const OrderStatus = ({ orderId }) => {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchStatus = async () => {
      const result = await getOrderStatus(orderId);
      setStatus(result.status);
    };
    fetchStatus();
  }, [orderId]);

  return (
    <div>
      <h4>Order Status: {status}</h4>
    </div>
  );
};

export default OrderStatus;
