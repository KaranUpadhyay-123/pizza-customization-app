import React from 'react';
import Navbar from '../components/Navbar';
import OrderStatus from '../components/OrderStatus';

const Dashboard = ({ user }) => (
  <div>
    <Navbar />
    <h1>User Dashboard</h1>
    <OrderStatus orderId={user.latestOrderId} />
  </div>
);

export default Dashboard;
