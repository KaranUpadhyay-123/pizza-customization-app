import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import CustomizePizza from './pages/CustomizePizza';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/customize-pizza" element={<CustomizePizza />} />
        </Routes>
    </Router>

  );
}

export default App;
